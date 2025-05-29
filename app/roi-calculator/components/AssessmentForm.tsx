import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

export default function AssessmentForm({
  assessmentData,
  handleAssessmentChange,
  handleAssessmentSubmit,
  PRIMARY,
  DARK,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="shadow-xl border-0 bg-white">
        <CardHeader
          className="text-white rounded-t-lg"
          style={{ background: DARK }}
        >
          <CardTitle className="text-2xl flex items-center gap-2">
            <Mail className="h-6 w-6" />
            Get Detailed Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleAssessmentSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" style={{ color: DARK }}>
                  First Name
                </Label>
                <Input
                  id="firstName"
                  required
                  value={assessmentData.firstName}
                  onChange={(e) =>
                    handleAssessmentChange("firstName", e.target.value)
                  }
                  className="border-2 border-gray-200"
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
              <div>
                <Label htmlFor="lastName" style={{ color: DARK }}>
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  required
                  value={assessmentData.lastName}
                  onChange={(e) =>
                    handleAssessmentChange("lastName", e.target.value)
                  }
                  className="border-2 border-gray-200"
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" style={{ color: DARK }}>
                Business Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={assessmentData.email}
                onChange={(e) =>
                  handleAssessmentChange("email", e.target.value)
                }
                className="border-2 border-gray-200"
                onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>
            <div>
              <Label htmlFor="jobTitle" style={{ color: DARK }}>
                Job Title
              </Label>
              <Input
                id="jobTitle"
                value={assessmentData.jobTitle}
                onChange={(e) =>
                  handleAssessmentChange("jobTitle", e.target.value)
                }
                className="border-2 border-gray-200"
                onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>
            <div>
              <Label htmlFor="phone" style={{ color: DARK }}>
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={assessmentData.phone}
                onChange={(e) =>
                  handleAssessmentChange("phone", e.target.value)
                }
                className="border-2 border-gray-200"
                onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>
            <div>
              <Label style={{ color: DARK }}>Industry</Label>
              <Select
                onValueChange={(value) =>
                  handleAssessmentChange("industry", value)
                }
              >
                <SelectTrigger className="border-2 border-gray-200">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance & Banking</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="retail">Retail & E-commerce</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="hospitality">
                    Hospitality & Food Services
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label style={{ color: DARK }}>Country</Label>
              <Select
                onValueChange={(value) =>
                  handleAssessmentChange("country", value)
                }
              >
                <SelectTrigger className="border-2 border-gray-200">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              className="w-full text-white py-3 text-lg font-semibold hover:opacity-90 transition-opacity"
              style={{ background: PRIMARY }}
            >
              Get Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
