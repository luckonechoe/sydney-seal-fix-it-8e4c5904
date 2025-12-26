
import { useState } from 'react';
import { Calculator, ChevronRight, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface EstimateResult {
  lowEstimate: number;
  highEstimate: number;
  service: string;
  factors: string[];
}

const ServiceCalculator = () => {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('');
  const [areaSize, setAreaSize] = useState('');
  const [condition, setCondition] = useState('');
  const [urgency, setUrgency] = useState('');
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);

  const services = [
    { id: 'shower-leak', label: 'Shower Leak Repair', basePrice: 749 },
    // { id: 'shower-retile', label: 'Shower Re-Tile', basePrice: 2499 },
    { id: 'balcony-leak', label: 'Balcony Leak Repair', basePrice: 1649 },
    // { id: 'balcony-retile', label: 'Balcony Re-Tile', basePrice: 3999 },
    { id: 'bathroom-restore', label: 'Bathroom Restoration', basePrice: 1949 },
    // { id: 'complete-recon', label: 'Complete Reconstruction', basePrice: 4999 }
  ];

  const sizes = [
    { id: 'small', label: 'Small (< 4 sqm)', multiplier: 1 },
    { id: 'medium', label: 'Medium (4-8 sqm)', multiplier: 1.3 },
    { id: 'large', label: 'Large (8-15 sqm)', multiplier: 1.6 },
    { id: 'xlarge', label: 'Extra Large (> 15 sqm)', multiplier: 2 }
  ];

  const conditions = [
    { id: 'minor', label: 'Minor Issues', multiplier: 1, description: 'Small cracks, minor discoloration' },
    { id: 'moderate', label: 'Moderate Damage', multiplier: 1, description: 'Visible leaks, some tile damage' },
    { id: 'severe', label: 'Severe Damage', multiplier: 1, description: 'Major water damage, structural issues' }
  ];

  const urgencies = [
    { id: 'standard', label: 'Standard (1-2 weeks)', multiplier: 1 },
    { id: 'priority', label: 'Priority (3-5 days)', multiplier: 1.1 },
    { id: 'emergency', label: 'Emergency (24-48 hours)', multiplier: 1.25 }
  ];

  const calculateEstimate = () => {
    const selectedService = services.find(s => s.id === serviceType);
    const selectedSize = sizes.find(s => s.id === areaSize);
    const selectedCondition = conditions.find(c => c.id === condition);
    const selectedUrgency = urgencies.find(u => u.id === urgency);

    if (!selectedService || !selectedSize || !selectedCondition || !selectedUrgency) return;

    const base = selectedService.basePrice;
    const calculated = base * selectedSize.multiplier * selectedCondition.multiplier * selectedUrgency.multiplier;
    
    const factors: string[] = [];
    if (selectedSize.multiplier > 1) factors.push(`${selectedSize.label}`);
    if (selectedCondition.multiplier > 1) factors.push(`${selectedCondition.label}`);
    if (selectedUrgency.multiplier > 1) factors.push(`${selectedUrgency.label}`);

    setEstimate({
      lowEstimate: Math.round(calculated * 0.9),
      highEstimate: Math.round(calculated * 1.1),
      service: selectedService.label,
      factors
    });
    setStep(5);
  };

  const resetCalculator = () => {
    setStep(1);
    setServiceType('');
    setAreaSize('');
    setCondition('');
    setUrgency('');
    setEstimate(null);
  };

  const OptionButton = ({ 
    selected, 
    onClick, 
    label, 
    description 
  }: { 
    selected: boolean; 
    onClick: () => void; 
    label: string; 
    description?: string;
  }) => (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
        selected 
          ? 'border-primary bg-primary/10 text-foreground' 
          : 'border-border bg-background hover:border-primary/50 text-foreground'
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">{label}</div>
          {description && <div className="text-sm text-muted-foreground mt-1">{description}</div>}
        </div>
        {selected && <Check className="w-5 h-5 text-primary" />}
      </div>
    </button>
  );

  const ProgressBar = () => (
    <div className="flex gap-2 mb-8">
      {[1, 2, 3, 4].map((s) => (
        <div
          key={s}
          className={`h-2 flex-1 rounded-full transition-colors ${
            s <= step ? 'bg-primary' : 'bg-muted'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="py-16 lg:py-24 bg-muted/30" id="calculator">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get an Instant Estimate
            </h2>
            <p className="text-lg text-muted-foreground">
              Answer a few questions to get a ballpark estimate for your project
            </p>
          </div>

          <Card className="p-6 md:p-8">
            {step < 5 && <ProgressBar />}

            {/* Step 1: Service Type */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  What service do you need?
                </h3>
                <div className="space-y-3">
                  {services.map((service) => (
                    <OptionButton
                      key={service.id}
                      selected={serviceType === service.id}
                      onClick={() => setServiceType(service.id)}
                      label={service.label}
                    />
                  ))}
                </div>
                <Button 
                  className="w-full mt-6" 
                  size="lg"
                  disabled={!serviceType}
                  onClick={() => setStep(2)}
                >
                  Continue <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {/* Step 2: Area Size */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  What's the approximate size?
                </h3>
                <div className="space-y-3">
                  {sizes.map((size) => (
                    <OptionButton
                      key={size.id}
                      selected={areaSize === size.id}
                      onClick={() => setAreaSize(size.id)}
                      label={size.label}
                    />
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button 
                    className="flex-1" 
                    disabled={!areaSize}
                    onClick={() => setStep(3)}
                  >
                    Continue <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Condition */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  What's the current condition?
                </h3>
                <div className="space-y-3">
                  {conditions.map((cond) => (
                    <OptionButton
                      key={cond.id}
                      selected={condition === cond.id}
                      onClick={() => setCondition(cond.id)}
                      label={cond.label}
                      description={cond.description}
                    />
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button 
                    className="flex-1" 
                    disabled={!condition}
                    onClick={() => setStep(4)}
                  >
                    Continue <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Urgency */}
            {step === 4 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  How soon do you need this done?
                </h3>
                <div className="space-y-3">
                  {urgencies.map((urg) => (
                    <OptionButton
                      key={urg.id}
                      selected={urgency === urg.id}
                      onClick={() => setUrgency(urg.id)}
                      label={urg.label}
                    />
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <Button variant="outline" onClick={() => setStep(3)} className="flex-1">
                    Back
                  </Button>
                  <Button 
                    className="flex-1" 
                    disabled={!urgency}
                    onClick={calculateEstimate}
                  >
                    Get Estimate <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 5: Results */}
            {step === 5 && estimate && (
              <div className="animate-fade-in text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Your Estimated Cost
                </h3>
                <p className="text-muted-foreground mb-6">{estimate.service}</p>
                
                <div className="bg-primary/10 rounded-xl p-6 mb-6">
                  <div className="text-4xl font-bold text-primary">
                    ${estimate.lowEstimate.toLocaleString()} - ${estimate.highEstimate.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    *This is an estimate only. Final price will be confirmed after inspection.
                  </p>
                </div>

                {estimate.factors.length > 0 && (
                  <div className="text-left mb-6">
                    <p className="text-sm font-medium text-foreground mb-2">Price factors included:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {estimate.factors.map((factor, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-3">
                  <Button size="lg" className="w-full" asChild>
                    <a href="/contact">Get Accurate Quote</a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a href="tel:0421043444" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call for Instant Quote
                    </a>
                  </Button>
                  <button 
                    onClick={resetCalculator}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceCalculator;
