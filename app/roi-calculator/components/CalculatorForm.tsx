import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function CalculatorForm({
  calculatorData,
  handleCalculatorChange,
  results,
  PRIMARY,
  DARK,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="shadow-xl border-0 bg-white">
        <CardHeader
          className="text-white rounded-t-lg"
          style={{ background: PRIMARY }}
        >
          <CardTitle className="text-2xl flex items-center gap-2">
            <Calculator className="h-6 w-6" />
            Cost Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-6">
            <div>
              <Label
                htmlFor="hours"
                className="font-medium mb-2 block"
                style={{ color: DARK }}
              >
                Hours spent per week per person
              </Label>
              <Input
                id="hours"
                type="number"
                placeholder="e.g., 40"
                value={calculatorData.hoursPerWeek}
                onChange={(e) =>
                  handleCalculatorChange("hoursPerWeek", e.target.value)
                }
                className="border-2 border-gray-200 focus:border-opacity-100"
                onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>
            <div>
              <Label
                htmlFor="people"
                className="font-medium mb-2 block"
                style={{ color: DARK }}
              >
                Number of people performing the task
              </Label>
              <Input
                id="people"
                type="number"
                placeholder="e.g., 5"
                value={calculatorData.numberOfPeople}
                onChange={(e) =>
                  handleCalculatorChange("numberOfPeople", e.target.value)
                }
                className="border-2 border-gray-200"
                onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>
            <div>
              <Label
                htmlFor="rate"
                className="font-medium mb-2 block"
                style={{ color: DARK }}
              >
                Average hourly rate ($)
              </Label>
              <Input
                id="rate"
                type="number"
                placeholder="e.g., 25"
                value={calculatorData.hourlyRate}
                onChange={(e) =>
                  handleCalculatorChange("hourlyRate", e.target.value)
                }
                className="border-2 border-gray-200"
                onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>
            <div>
              <Label
                htmlFor="automation"
                className="font-medium mb-2 block"
                style={{ color: DARK }}
              >
                Automation potential (%)
              </Label>
              <Input
                id="automation"
                type="number"
                placeholder="e.g., 80"
                max="100"
                value={calculatorData.automationPercentage}
                onChange={(e) =>
                  handleCalculatorChange("automationPercentage", e.target.value)
                }
                className="border-2 border-gray-200"
                onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>
            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 p-6 bg-gray-50 rounded-lg border-2"
              style={{ borderColor: `${PRIMARY}20` }}
            >
              <h4 className="font-semibold mb-4" style={{ color: DARK }}>
                Potential Savings
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Weekly Savings</p>
                  <p className="text-2xl font-bold" style={{ color: PRIMARY }}>
                    $
                    {results.weeklySavings.toLocaleString("en-US", {
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Monthly Savings</p>
                  <p className="text-2xl font-bold" style={{ color: PRIMARY }}>
                    $
                    {results.monthlySavings.toLocaleString("en-US", {
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Yearly Savings</p>
                  <p className="text-3xl font-bold" style={{ color: PRIMARY }}>
                    $
                    {results.yearlySavings.toLocaleString("en-US", {
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Hours Saved/Week</p>
                  <p className="text-2xl font-bold" style={{ color: DARK }}>
                    {results.automatedHours.toFixed(1)}h
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
