"use client";

import React, { useState, useMemo } from "react";
import {
  TrendingUp,
  DollarSign,
  Calendar,
  Percent,
  PiggyBank,
  Calculator,
} from "lucide-react";

function formatCurrency(n: any) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

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

export default function MortgageCalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [annualRate, setAnnualRate] = useState(7.25);
  const [years, setYears] = useState(25);
  const [activeTab, setActiveTab] = useState("summary");

  const {
    monthly,
    totalInterest,
    totalPaid,
    principalPercent,
    interestPercent,
  } = useMemo(() => {
    const r = annualRate / 100 / 12;
    const n = years * 12;
    const m =
      r === 0
        ? principal / n
        : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = m * n;
    const interest = total - principal;
    const pPercent = (principal / total) * 100;
    const iPercent = (interest / total) * 100;
    return {
      monthly: m,
      totalInterest: interest,
      totalPaid: total,
      principalPercent: pPercent,
      interestPercent: iPercent,
    };
  }, [principal, annualRate, years]);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <Calculator className="h-4 w-4" />
            Financial Calculator
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Estimate Your Mortgage
          </h1>
          <p className="text-slate-600">
            Adjust the values below to see your estimated monthly payment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Panel - Inputs */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-200">
              <h2 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                <div className="h-8 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
                Loan Details
              </h2>

              {/* Loan Amount */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-blue-600" />
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    value={principal}
                    onChange={(e) =>
                      setPrincipal(Math.max(0, Number(e.target.value)))
                    }
                    className="w-28 sm:w-32 px-3 py-1.5 text-right border border-slate-300 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <CustomSlider
                  value={principal}
                  min={50000}
                  max={2000000}
                  step={10000}
                  onChange={setPrincipal}
                  gradient="bg-gradient-to-r from-blue-600 to-indigo-600"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>$50K</span>
                  <span>$2M</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Percent className="h-4 w-4 text-emerald-600" />
                    Interest Rate
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      step="0.05"
                      value={annualRate}
                      onChange={(e) =>
                        setAnnualRate(Math.max(0, Number(e.target.value)))
                      }
                      className="w-16 sm:w-20 px-3 py-1.5 text-right border border-slate-300 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <span className="text-sm font-semibold text-slate-600">
                      %
                    </span>
                  </div>
                </div>
                <CustomSlider
                  value={annualRate}
                  min={0}
                  max={18}
                  step={0.05}
                  onChange={setAnnualRate}
                  gradient="bg-gradient-to-r from-emerald-600 to-teal-600"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>0%</span>
                  <span>18%</span>
                </div>
              </div>

              {/* Term */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    Loan Term
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      value={years}
                      onChange={(e) =>
                        setYears(Math.max(1, Number(e.target.value)))
                      }
                      className="w-16 sm:w-20 px-3 py-1.5 text-right border border-slate-300 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <span className="text-sm font-semibold text-slate-600">
                      years
                    </span>
                  </div>
                </div>
                <CustomSlider
                  value={years}
                  min={1}
                  max={40}
                  step={1}
                  onChange={setYears}
                  gradient="bg-gradient-to-r from-purple-600 to-pink-600"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>1 year</span>
                  <span>40 years</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <StatCard
                icon={DollarSign}
                label="Loan Amount"
                value={formatCurrency(principal)}
                color="bg-blue-600"
                delay={0}
              />
              <StatCard
                icon={Percent}
                label="Interest Rate"
                value={`${annualRate.toFixed(2)}%`}
                color="bg-emerald-600"
                delay={100}
              />
              <StatCard
                icon={Calendar}
                label="Loan Term"
                value={`${years} years`}
                color="bg-purple-600"
                delay={200}
              />
              <StatCard
                icon={TrendingUp}
                label="Total Payments"
                value={`${years * 12} months`}
                color="bg-orange-600"
                delay={300}
              />
            </div>
          </div>

          {/* Right Panel - Results */}
          <div className="space-y-6">
            {/* Monthly Payment Highlight */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 sm:p-8 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-2 opacity-90">
                  <Calculator className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    Estimated Monthly Payment
                  </span>
                </div>
                <div className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">
                  {formatCurrency(monthly)}
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Live calculation
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="flex border-b border-slate-200 bg-slate-50">
                {["summary", "breakdown", "tips"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-3 py-2 sm:px-4 sm:py-3 text-sm font-medium transition-all relative ${
                      activeTab === tab
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600" />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-6">
                {activeTab === "summary" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-600">Monthly Payment</span>
                      <span className="text-lg sm:text-xl font-bold text-slate-900">
                        {formatCurrency(monthly)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-slate-100">
                      <span className="text-slate-600">Total Paid</span>
                      <span className="font-semibold text-slate-900">
                        {formatCurrency(totalPaid)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-slate-600">Total Interest</span>
                      <span className="font-semibold text-orange-600">
                        {formatCurrency(totalInterest)}
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "breakdown" && (
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-slate-700">
                          Payment Distribution
                        </span>
                      </div>
                      <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500"
                          style={{ width: `${principalPercent}%` }}
                        />
                        <div
                          className="bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                          style={{ width: `${interestPercent}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between mt-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
                          <span className="text-slate-600">Principal</span>
                          <span className="font-semibold text-slate-900">
                            {principalPercent.toFixed(1)}%
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                          <span className="text-slate-600">Interest</span>
                          <span className="font-semibold text-slate-900">
                            {interestPercent.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-slate-100">
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <div className="text-lg sm:text-2xl font-bold text-blue-900 mb-1">
                          {formatCurrency(principal)}
                        </div>
                        <div className="text-xs text-blue-700">
                          Principal Amount
                        </div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-xl">
                        <div className="text-lg sm:text-2xl font-bold text-orange-900 mb-1">
                          {formatCurrency(totalInterest)}
                        </div>
                        <div className="text-xs text-orange-700">
                          Interest Paid
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tips" && (
                  <div className="space-y-4">
                    <div className="flex gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <PiggyBank className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-slate-700">
                        <strong className="text-slate-900">
                          Lower your payment:
                        </strong>{" "}
                        Increase the loan term or reduce the rate via a higher
                        down payment.
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                      <TrendingUp className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-slate-700">
                        <strong className="text-slate-900">
                          Save on interest:
                        </strong>{" "}
                        Make occasional extra principal payments to reduce total
                        interest over time.
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 bg-purple-50 rounded-xl border border-purple-100">
                      <Calculator className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-slate-700">
                        <strong className="text-slate-900">
                          Consider refinancing:
                        </strong>{" "}
                        If rates drop significantly, refinancing could lower
                        your monthly payment.
                      </div>
                    </div>
                  </div>
                )}
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
