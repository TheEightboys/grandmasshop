import { createFileRoute } from '@tanstack/react-router'
import { SiteLayout } from '@/components/site/SiteLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/membership')({
  component: Membership,
})

function Membership() {
  return (
    <SiteLayout>
      <div className="min-h-screen bg-gradient-to-b from-olive-50 to-white">
        {/* Hero Section */}
        <section className="bg-olive-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-cormorant font-bold text-olive-700 mb-6">
              Grandma's Herbals
            </h1>
            <p className="text-lg text-olive-600 mb-2">
              Guided Meditation • Herbal Wellness • AI Assisted Lifestyle Optimization
            </p>
            <p className="text-base text-olive-700 font-semibold max-w-3xl mx-auto mb-6">
              "Wholistic Wellness Through Awareness, Circulation & Strategic Herbal Guidance"
            </p>
            <p className="text-olive-600 max-w-3xl mx-auto">
              Grandma's Herbals combines traditional herbal wisdom, guided awareness practices, AI-assisted wellness assessments, and multidisciplinary wellness perspectives to help clients create healthier lifestyle pathways.
            </p>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-cormorant font-bold text-olive-700 mb-8 text-center">
              Our Wellness Ecosystem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-olive-600">Core Offerings</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-olive-500 mr-2">•</span>
                    <span>Guided meditation for awareness, relaxation, and circulation support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-olive-500 mr-2">•</span>
                    <span>Herbal wellness consultations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-olive-500 mr-2">•</span>
                    <span>AI-assisted meal and lifestyle recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-olive-500 mr-2">•</span>
                    <span>Wellness education protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-olive-500 mr-2">•</span>
                    <span>AI-assisted medication and herbal interaction screening</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-olive-600">Expert Advisory Team</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-olive-500 mr-2">•</span>
                    <span>Master Herbalist & Energy Flow Specialist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-olive-500 mr-2">•</span>
                    <span>Psychology Consultant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-olive-500 mr-2">•</span>
                    <span>Physiatry Consultant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-olive-500 mr-2">•</span>
                    <span>Internal Medicine Consultant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-olive-500 mr-2">•</span>
                    <span>AI-assisted wellness analysis systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-cormorant font-bold text-olive-700 mb-12 text-center">
              Membership Tiers
            </h2>

            {/* Tier I */}
            <div className="mb-12">
              <Card className="p-8 border-2 border-olive-200 hover:border-olive-400 transition">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-olive-700 mb-2">
                      Tier I
                    </h3>
                    <p className="text-lg font-semibold text-olive-600 mb-2">
                      Foundation Awareness Package
                    </p>
                    <p className="italic text-olive-500 mb-4">
                      "Restore & Reconnect"
                    </p>
                    <p className="text-2xl font-bold text-olive-700 mb-4">
                      $149 – $249<span className="text-sm font-normal text-gray-600">/month</span>
                    </p>
                    <Button asChild className="w-full bg-olive-500 hover:bg-olive-600">
                      <Link to="/checkout">Get Started</Link>
                    </Button>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-olive-700 mb-4">Includes:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>30-minute Guided Awareness & Breathwork Meditation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Herbal Wellness Intake Assessment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>AI-Assisted Lifestyle Survey</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Basic Meal Guidance Protocol</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>AI Medication & Herbal Interaction Review</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Circulation & Relaxation Focus Recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Foundational Herbal Recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Educational Wellness Summary PDF</span>
                      </li>
                      <li className="flex items-start col-span-2">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Access to beginner guided meditation library</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-olive-50 rounded-lg">
                      <h4 className="font-semibold text-olive-700 mb-2">Focus Areas:</h4>
                      <p className="text-sm text-gray-700">
                        Stress awareness • Relaxation support • Sleep support • Mental clarity • Foundational circulation support • Lifestyle balance
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      <strong>Ideal For:</strong> Individuals beginning their wellness journey seeking foundational guidance and awareness support.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Tier II */}
            <div className="mb-12">
              <Card className="p-8 border-2 border-olive-300 bg-olive-50 hover:border-olive-400 transition">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-olive-700 mb-2">
                      Tier II
                    </h3>
                    <p className="text-lg font-semibold text-olive-600 mb-2">
                      Integrated Wellness Package
                    </p>
                    <p className="italic text-olive-500 mb-4">
                      "Elevate & Optimize"
                    </p>
                    <p className="text-2xl font-bold text-olive-700 mb-4">
                      $349 – $449<span className="text-sm font-normal text-gray-600">/month</span>
                    </p>
                    <Button asChild className="w-full bg-olive-600 hover:bg-olive-700">
                      <Link to="/checkout">Get Started</Link>
                    </Button>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-olive-700 mb-4">Includes Tier I Plus:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>60-minute monthly consultation sessions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Advanced herbal protocol recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Personalized meal plan protocols</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Advanced meditation library access</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Monthly wellness product access</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Personalized herbal tea & wellness kits</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Wellness tracking & progress reports</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-500 mr-2">✓</span>
                        <span>Group meditation session access</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                      <strong>Ideal For:</strong> Individuals committed to comprehensive wellness transformation with personalized guidance and tracking.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Tier III */}
            <div className="mb-12">
              <Card className="p-8 border-2 border-olive-400 bg-gradient-to-r from-olive-50 to-white hover:border-olive-500 transition">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-olive-800 mb-2">
                      Tier III
                    </h3>
                    <p className="text-lg font-semibold text-olive-700 mb-2">
                      Premium Transformation Package
                    </p>
                    <p className="italic text-olive-600 mb-4">
                      "Master Your Wellness"
                    </p>
                    <p className="text-2xl font-bold text-olive-800 mb-4">
                      $649 – $999<span className="text-sm font-normal text-gray-600">/month</span>
                    </p>
                    <Button asChild className="w-full bg-olive-700 hover:bg-olive-800">
                      <Link to="/checkout">Get Started</Link>
                    </Button>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-olive-700 mb-4">Includes Tier II Plus:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-start">
                        <span className="text-olive-600 mr-2">✓</span>
                        <span>Unlimited consultation access (phone/video)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-600 mr-2">✓</span>
                        <span>Premium herbal compounds & custom blends</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-600 mr-2">✓</span>
                        <span>Integrative practitioner collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-600 mr-2">✓</span>
                        <span>Comprehensive wellness lifestyle design</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-600 mr-2">✓</span>
                        <span>Advanced AI-assisted wellness optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-600 mr-2">✓</span>
                        <span>Priority customer support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-600 mr-2">✓</span>
                        <span>Exclusive wellness summit access</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-olive-600 mr-2">✓</span>
                        <span>Family wellness integration program</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                      <strong>Ideal For:</strong> Executives, entrepreneurs, high-performance professionals, and clients seeking a comprehensive wellness lifestyle transformation experience.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Add-On Services */}
        <section className="py-16 bg-olive-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-cormorant font-bold text-olive-700 mb-12 text-center">
              Optional Add-On Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-olive-700 mb-2">Guided Meditation Library Access</h3>
                <p className="text-olive-600 text-lg font-bold">$19–$49<span className="text-sm font-normal text-gray-600">/month</span></p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-olive-700 mb-2">AI Meal Protocol Generator</h3>
                <p className="text-olive-600 text-lg font-bold">$79<span className="text-sm font-normal text-gray-600">/month</span></p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-olive-700 mb-2">Personalized Herbal Tea & Wellness Kits</h3>
                <p className="text-olive-600 text-lg font-bold">Starting at $49</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-olive-700 mb-2">Premium Herbal Compounds</h3>
                <p className="text-olive-600 text-lg font-bold">Custom pricing</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-olive-700 mb-2">Group Meditation Sessions</h3>
                <p className="text-olive-600 text-lg font-bold">Starting at $199<span className="text-sm font-normal text-gray-600">/session</span></p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-olive-700 mb-2">Corporate Wellness Programs</h3>
                <p className="text-olive-600 text-lg font-bold">Custom enterprise pricing</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Wellness Notice</h3>
              <p className="text-yellow-800 text-sm mb-3">
                Grandma's Herbals wellness consultations, guided meditation services, and AI-assisted wellness recommendations are educational and wellness-supportive in nature and are not intended to diagnose, treat, cure, or prevent disease.
              </p>
              <p className="text-yellow-800 text-sm mb-3">
                Clients should always consult with licensed healthcare professionals regarding medical concerns, medications, or treatment decisions.
              </p>
              <p className="text-yellow-800 text-sm">
                AI-generated wellness recommendations are informational tools designed to support wellness awareness and should not replace individualized medical advice from licensed healthcare providers.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Positioning */}
        <section className="py-12 bg-olive-100">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-2xl font-cormorant font-bold text-olive-700 mb-4">Our Mission</h3>
            <p className="text-olive-700 text-lg mb-4">
              Grandma's Herbals bridges traditional herbal wisdom, modern AI-assisted wellness analysis, and guided awareness practices into a premium wholistic wellness experience designed to support healthier lifestyle outcomes through education, awareness, and intentional wellness adaptation.
            </p>
            <p className="text-olive-600 italic text-lg font-semibold">
              "Adjusting to changing paradigms strategically & methodically."
            </p>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}
