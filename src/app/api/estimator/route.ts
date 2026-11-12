import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { projectType, addons } = await request.json();

    const baseRates: Record<string, number> = {
      website: 15000,
      ecommerce: 35000,
      automation: 25000,
      custom: 55000,
    };

    const addonRates: Record<string, number> = {
      gst: 5000,
      gmb: 7000,
      dashboard: 10000,
    };

    const base = baseRates[projectType] || 15000;
    const addonsCost = (addons || []).reduce(
      (sum: number, key: string) => sum + (addonRates[key] || 0),
      0
    );

    const total = base + addonsCost;

    return NextResponse.json({
      projectType,
      basePrice: base,
      addonsPrice: addonsCost,
      totalEstimate: total,
      currency: 'INR',
      timeline: projectType === 'custom' ? '2-4 Weeks' : '5-14 Days',
    });
  } catch (err) {
    return NextResponse.json({ error: 'Calculation failed' }, { status: 400 });
  }
}
