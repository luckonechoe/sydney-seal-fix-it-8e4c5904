import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PerformanceMetrics = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const metrics = [
    {
      value: "100%",
      label: "Success Rate"
    },
    {
      value: "3-6hrs",
      label: "Average Job Time"
    },
    {
      value: "48hr",
      label: "Full Cure Time"
    },
    {
      value: "Lifetime",
      label: "Mould Protection"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-8 bg-gradient-to-br from-slate-50 to-blue-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <Card className="bg-primary/5 border-primary/10">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PerformanceMetrics;