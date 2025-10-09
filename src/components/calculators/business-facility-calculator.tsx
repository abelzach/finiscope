"use client";

import React, { useState, useMemo } from "react";
import {
  TrendingUp,
  DollarSign,
  Calendar,
  Percent,
  Building2,
  CreditCard,
  BarChart3,
  PieChart,
} from "lucide-react";

function currency(n: any) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function BusinessFacilityCalculator() {
  const [revenue, setRevenue] = useState(10000000);
  const [ebitdaMargin, setEbitdaMargin] = useState(18);
  const [type, setType] = useState("term");
  const [rate, setRate] = useState(10);
  const [tenorYears, setTenorYears] = useState(5);
  const [utilization, setUtilization] = useState(60);

  interface StatCardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    value: number | string;
    color: string;
    delay?: number;
  }

  interface CustomSliderProps {
    value: number;
    min: number;
    max: number;
    step?: number;
    onChange: (value: number) => void;
    gradient?: string;
  }

  const ebitda = useMemo(
    () => (revenue * ebitdaMargin) / 100,
    [revenue, ebitdaMargin]
  );

  const termCapacity = ebitda * 3;
  const rcfLimit = revenue * 0.2;

  const termMonthly = useMemo(() => {
    const principal = termCapacity;
    const r = rate / 100 / 12;
    const n = tenorYears * 12;
    const m =
      r === 0
        ? principal / n
        : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = m * n;
    const interest = total - principal;
    return { m, total, interest, principal };
  }, [termCapacity, rate, tenorYears]);

  const rcfMonthlyInterest = useMemo(() => {
    const drawn = (rcfLimit * utilization) / 100;
    const monthly = (rate / 100 / 12) * drawn;
    return { drawn, monthly };
  }, [rcfLimit, utilization, rate]);

  const CustomSlider: React.FC<CustomSliderProps> = ({
    value,
    min,
    max,
    step,
    onChange,
    gradient,
  }) => (
    <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden group">
      <div
        className={`absolute h-full ${gradient} transition-all duration-300 ease-out`}
        style={{ width: `${((value - min) / (max - min)) * 100}%` }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-blue-600 rounded-full shadow-lg transition-all duration-200 group-hover:scale-125"
        style={{ left: `calc(${((value - min) / (max - min)) * 100}% - 10px)` }}
      />
    </div>
  );

  const StatCard: React.FC<StatCardProps> = ({
    icon: Icon,
    label,
    value,
    color,
    delay,
  }) => (
    <div
      className="relative bg-white rounded-xl p-4 border border-slate-200 overflow-hidden group hover:shadow-lg transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />
      <div className="relative flex items-start gap-3">
        <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
          <Icon className={`h-5 w-5 ${color.replace("bg-", "text-")}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-slate-600 mb-1">{label}</div>
          <div className="text-lg font-bold text-slate-900 truncate">
            {value}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            <Building2 className="h-4 w-4" />
            Corporate Finance
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Corporate Financing
          </h1>
          <p className="text-slate-600">
            Model your term loan or revolving credit facility based on company
            metrics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Panel - Inputs */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-200">
              <h2 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <div className="h-8 w-1 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full" />
                Company Financials
              </h2>

              {/* Annual Revenue */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-indigo-600" />
                    Revenue
                  </label>
                  <input
                    type="number"
                    value={revenue}
                    onChange={(e) =>
                      setRevenue(Math.max(0, Number(e.target.value)))
                    }
                    className="w-28 sm:w-36 px-3 py-1.5 text-right border border-slate-300 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <CustomSlider
                  value={revenue}
                  min={500000}
                  max={200000000}
                  step={100000}
                  onChange={setRevenue}
                  gradient="bg-gradient-to-r from-indigo-600 to-purple-600"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>$500K</span>
                  <span>$200M</span>
                </div>
              </div>

              {/* EBITDA Margin */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-emerald-600" />
                    EBITDA Margin
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      step="0.5"
                      value={ebitdaMargin}
                      onChange={(e) =>
                        setEbitdaMargin(
                          Math.max(0, Math.min(80, Number(e.target.value)))
                        )
                      }
                      className="w-16 sm:w-20 px-3 py-1.5 text-right border border-slate-300 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <span className="text-sm font-semibold text-slate-600">
                      %
                    </span>
                  </div>
                </div>
                <CustomSlider
                  value={ebitdaMargin}
                  min={0}
                  max={80}
                  step={0.5}
                  onChange={setEbitdaMargin}
                  gradient="bg-gradient-to-r from-emerald-600 to-teal-600"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>0%</span>
                  <span>80%</span>
                </div>
              </div>

              {/* Facility Type */}
              <div className="space-y-3 mb-6">
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-blue-600" />
                  Facility Type
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <button
                    onClick={() => setType("term")}
                    className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 font-medium text-sm transition-all ${
                      type === "term"
                        ? "border-blue-600 bg-blue-50 text-blue-900"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    Term Loan
                  </button>
                  <button
                    onClick={() => setType("rcf")}
                    className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 font-medium text-sm transition-all ${
                      type === "rcf"
                        ? "border-blue-600 bg-blue-50 text-blue-900"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    RCF
                  </button>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Percent className="h-4 w-4 text-orange-600" />
                    Interest Rate
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      step="0.25"
                      value={rate}
                      onChange={(e) =>
                        setRate(
                          Math.max(0, Math.min(30, Number(e.target.value)))
                        )
                      }
                      className="w-16 sm:w-20 px-3 py-1.5 text-right border border-slate-300 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <span className="text-sm font-semibold text-slate-600">
                      %
                    </span>
                  </div>
                </div>
                <CustomSlider
                  value={rate}
                  min={0}
                  max={30}
                  step={0.25}
                  onChange={setRate}
                  gradient="bg-gradient-to-r from-orange-600 to-red-600"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>0%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Conditional: Tenor or Utilization */}
              {type === "term" ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      Tenor
                    </label>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        value={tenorYears}
                        onChange={(e) =>
                          setTenorYears(
                            Math.max(1, Math.min(10, Number(e.target.value)))
                          )
                        }
                        className="w-16 sm:w-20 px-3 py-1.5 text-right border border-slate-300 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <span className="text-sm font-semibold text-slate-600">
                        years
                      </span>
                    </div>
                  </div>
                  <CustomSlider
                    value={tenorYears}
                    min={1}
                    max={10}
                    step={1}
                    onChange={setTenorYears}
                    gradient="bg-gradient-to-r from-purple-600 to-pink-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>1 year</span>
                    <span>10 years</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-blue-600" />
                      Utilization
                    </label>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        value={utilization}
                        onChange={(e) =>
                          setUtilization(
                            Math.max(0, Math.min(100, Number(e.target.value)))
                          )
                        }
                        className="w-16 sm:w-20 px-3 py-1.5 text-right border border-slate-300 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm font-semibold text-slate-600">
                        %
                      </span>
                    </div>
                  </div>
                  <CustomSlider
                    value={utilization}
                    min={0}
                    max={100}
                    step={1}
                    onChange={setUtilization}
                    gradient="bg-gradient-to-r from-blue-600 to-cyan-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <StatCard
                icon={DollarSign}
                label="Annual Revenue"
                value={currency(revenue)}
                color="bg-indigo-600"
                delay={0}
              />
              <StatCard
                icon={TrendingUp}
                label="EBITDA"
                value={currency(ebitda)}
                color="bg-emerald-600"
                delay={100}
              />
              <StatCard
                icon={PieChart}
                label="EBITDA Margin"
                value={`${ebitdaMargin.toFixed(1)}%`}
                color="bg-teal-600"
                delay={200}
              />
              <StatCard
                icon={Percent}
                label="Interest Rate"
                value={`${rate.toFixed(2)}%`}
                color="bg-orange-600"
                delay={300}
              />
            </div>
          </div>

          {/* Right Panel - Results */}
          <div className="space-y-6">
            {/* Facility Tabs */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="flex border-b border-slate-200 bg-slate-50">
                {["term", "rcf"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`flex-1 px-3 py-2 sm:px-4 sm:py-3 text-sm font-medium transition-all relative ${
                      type === t
                        ? "text-indigo-600"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {t === "term" ? "Term Loan" : "Revolving Credit"}
                    {type === t && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600" />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-6">
                {type === "term" ? (
                  <div className="space-y-6">
                    {/* Capacity Highlight */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-5 sm:p-6 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-y-20 translate-x-20" />
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-2 opacity-90">
                          <Building2 className="h-4 w-4" />
                          <span className="text-xs font-medium">
                            Lending Capacity (≈ 3.0× EBITDA)
                          </span>
                        </div>
                        <div className="text-3xl sm:text-4xl font-bold mb-1">
                          {currency(termCapacity)}
                        </div>
                      </div>
                    </div>

                    {/* Monthly Payment */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border border-blue-100">
                      <div className="text-sm text-slate-600 mb-1">
                        Estimated Monthly Payment
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                        {currency(termMonthly.m)}
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <div className="text-xs text-slate-600 mb-1">
                          Principal
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-slate-900">
                          {currency(termMonthly.principal)}
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <div className="text-xs text-slate-600 mb-1">
                          Total Interest
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-orange-900">
                          {currency(termMonthly.interest)}
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <div className="text-xs text-slate-600 mb-1">Rate</div>
                        <div className="text-lg sm:text-xl font-bold text-slate-900">
                          {rate.toFixed(2)}%
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <div className="text-xs text-slate-600 mb-1">Tenor</div>
                        <div className="text-lg sm:text-xl font-bold text-slate-900">
                          {tenorYears} years
                        </div>
                      </div>
                    </div>

                    {/* Total Cost */}
                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 font-medium">
                          Total Cost
                        </span>
                        <span className="text-xl sm:text-2xl font-bold text-slate-900">
                          {currency(termMonthly.total)}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* RCF Limit */}
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-xl p-5 sm:p-6 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-y-20 translate-x-20" />
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-2 opacity-90">
                          <CreditCard className="h-4 w-4" />
                          <span className="text-xs font-medium">
                            Credit Limit (≈ 20% of Revenue)
                          </span>
                        </div>
                        <div className="text-3xl sm:text-4xl font-bold mb-1">
                          {currency(rcfLimit)}
                        </div>
                      </div>
                    </div>

                    {/* Utilization Visual */}
                    <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-slate-700">
                          Utilization
                        </span>
                        <span className="text-base sm:text-lg font-bold text-blue-900">
                          {utilization}%
                        </span>
                      </div>
                      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-500"
                          style={{ width: `${utilization}%` }}
                        />
                      </div>
                    </div>

                    {/* Monthly Interest */}
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 sm:p-5 border border-orange-100">
                      <div className="text-sm text-slate-600 mb-1">
                        Monthly Interest @ {utilization}%
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                        {currency(rcfMonthlyInterest.monthly)}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <div className="text-xs text-slate-600 mb-1">
                          Drawn Amount
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-slate-900">
                          {currency(rcfMonthlyInterest.drawn)}
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <div className="text-xs text-slate-600 mb-1">Rate</div>
                        <div className="text-lg sm:text-xl font-bold text-slate-900">
                          {rate.toFixed(2)}%
                        </div>
                      </div>
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4">
                      <div className="flex gap-3">
                        <CreditCard className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-slate-700">
                          <strong className="text-slate-900">
                            Flexible access:
                          </strong>{" "}
                          Draw funds as needed and only pay interest on the
                          utilized amount.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Key Assumptions */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-indigo-600" />
                Key Assumptions
              </h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0" />
                  <p>Term loan capacity calculated at 3.0× EBITDA multiple</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0" />
                  <p>RCF limit estimated at 20% of annual revenue</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 flex-shrink-0" />
                  <p>
                    Actual terms depend on credit quality, covenants, and market
                    conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
