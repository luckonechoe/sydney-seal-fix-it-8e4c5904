

# Create "Maintenance Plans" Page

## What's Happening Now
The "View Maintenance Plans" button in the hero section of the Preventative Maintenance page (`/preventative-maintenance`) doesn't link anywhere -- it's a plain button with no navigation. Clicking it does nothing.

## What We'll Do
Create a new dedicated **Maintenance Plans** page at `/maintenance-plans` and wire the button to link there. This page will present the pricing tiers and plan details in a clear, comparison-friendly layout -- making it easy for visitors to choose the right plan and take action.

## New Page Structure

The `/maintenance-plans` page will include:

1. **Hero Section** -- "Choose the Right Maintenance Plan for Your Property" headline with a brief value proposition
2. **Pricing Cards (3-tier layout)** -- Side-by-side comparison of three plans:
   - **Essential Plan** (~$149/year) -- 2 inspections/year, basic reporting, standard scheduling
   - **Annual Plan** ($249/year, marked "Most Popular") -- 4 inspections/year, priority emergency service, 15% repair discount, photo reports, minor sealing included, extended warranty, reminders
   - **Premium Plan** (~$449/year) -- Monthly inspections, 24/7 priority emergency, 25% repair discount, thermal imaging, dedicated account manager
3. **Feature Comparison Table** -- Detailed side-by-side table so visitors can compare what's included in each tier at a glance
4. **Custom/Strata Section** -- For strata managers and commercial properties (10-50, 50-200, 200+ units) with a "Request Custom Quote" button linking to `/contact`
5. **FAQ Section** -- Common questions about plans (cancellation, what's included, coverage areas, how to sign up)
6. **CTA Section** -- Strong call-to-action with phone number and link to contact page

## Changes Summary

### New File
- **`src/pages/MaintenancePlans.tsx`** -- Full page component following the existing service page pattern (Helmet SEO meta, Header, Footer, consistent styling)

### Modified Files
- **`src/App.tsx`** -- Add route: `/maintenance-plans` pointing to the new page
- **`src/pages/PreventativeMaintenance.tsx`** -- Wrap the "View Maintenance Plans" button in a `Link` to `/maintenance-plans`

## Technical Details

- The new page will use the same layout pattern as existing service pages: `Helmet` for SEO, `Header`/`Footer` components, section-based layout with Tailwind CSS
- Uses existing UI components: `Card`, `Button`, `Badge`, `CheckCircle` icons
- Consistent with the AIDA content pattern used across other service pages
- The "View Maintenance Plans" button (line 42-44 in `PreventativeMaintenance.tsx`) will be wrapped with a React Router `Link` component pointing to `/maintenance-plans`
- All CTA buttons on the new page ("Enroll Now", "Call Now") will use `tel:` links or route to `/contact`
