import React from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export default function CtaSection() {
  const t = useTranslations('Experiences.gastronomy')

  return (
    <section className="py-20 bg-[#002841] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-lg md:text-xl mb-10 text-white/80">{t('cta.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[color:var(--color-redmonacair)] hover:bg-[color:var(--color-redmonacair)]/90 text-white"
              asChild
            >
              <Link href="/booking">
                {t('cta.bookButton')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="white"
              className="border-white text-white hover:bg-white/20"
              asChild
            >
              <Link href="/contact">
                {t('cta.contactButton')} <Phone className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
