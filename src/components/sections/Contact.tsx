import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MagneticButton, RevealText } from '@/components/motion'
import { cn } from '@/lib/utils'

const PROJECT_TYPES = ['EVENT', 'BRANDING', 'FILM', 'PHOTOGRAPHY', 'OTHER'] as const

interface ContactFormValues {
  name: string
  email: string
  company: string
  projectType: (typeof PROJECT_TYPES)[number]
  message: string
}

function fieldClassName(hasError: boolean) {
  return cn(
    'w-full border-b bg-transparent py-3 text-ivory placeholder:text-grey/60 focus:outline-none',
    hasError ? 'border-destructive' : 'border-white/20 focus:border-ivory',
  )
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>()

  const projectType = watch('projectType')

  function onSubmit(values: ContactFormValues) {
    // Stub: no backend/integration specified yet. Swap for the real
    // submission endpoint once one exists — don't imply delivery until then.
    console.log('Contact form submitted', values)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-bg-0 px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <RevealText
        as="h2"
        lines={['LET’S', 'CREATE', 'SOMETHING', 'WORTH', 'REMEMBERING.']}
        className="font-display text-[16vw] leading-[0.9] text-ivory uppercase sm:text-[9vw] lg:text-[6.5rem]"
        stagger={0.08}
      />

      <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div className="text-sm tracking-[0.05em] text-grey uppercase">
          <p>Dubai, UAE</p>
          <p className="mt-2 text-grey/60">Email / phone: TBD — pending real contact details</p>
        </div>

        {submitted ? (
          <p className="font-display text-2xl text-ivory">
            Thanks — your message is in. We&rsquo;ll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
            <div>
              <label htmlFor="name" className="text-xs tracking-[0.2em] text-grey uppercase">
                Name
              </label>
              <input
                id="name"
                type="text"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={fieldClassName(!!errors.name)}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="mt-1 text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-xs tracking-[0.2em] text-grey uppercase">
                Email
              </label>
              <input
                id="email"
                type="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={fieldClassName(!!errors.email)}
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                })}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="mt-1 text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="text-xs tracking-[0.2em] text-grey uppercase">
                Company
              </label>
              <input
                id="company"
                type="text"
                className={fieldClassName(false)}
                {...register('company')}
              />
            </div>

            <fieldset>
              <legend className="text-xs tracking-[0.2em] text-grey uppercase">
                Project type
              </legend>
              <div
                className="mt-3 flex flex-wrap gap-2"
                role="radiogroup"
                aria-invalid={!!errors.projectType}
              >
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    role="radio"
                    aria-checked={projectType === type}
                    onClick={() => setValue('projectType', type, { shouldValidate: true })}
                    className={cn(
                      'border px-4 py-2 text-xs tracking-[0.1em] uppercase transition-colors',
                      projectType === type
                        ? 'border-ivory bg-ivory text-bg-0'
                        : 'border-white/20 text-grey hover:border-ivory hover:text-ivory',
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <input
                type="hidden"
                {...register('projectType', { required: 'Select a project type' })}
              />
              {errors.projectType && (
                <p role="alert" className="mt-1 text-xs text-destructive">
                  {errors.projectType.message}
                </p>
              )}
            </fieldset>

            <div>
              <label htmlFor="message" className="text-xs tracking-[0.2em] text-grey uppercase">
                Tell us about it
              </label>
              <textarea
                id="message"
                rows={4}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={cn(fieldClassName(!!errors.message), 'resize-none')}
                {...register('message', { required: 'Tell us a little about the project' })}
              />
              {errors.message && (
                <p id="message-error" role="alert" className="mt-1 text-xs text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            <MagneticButton type="submit" disabled={isSubmitting} className="mt-4">
              Start the conversation →
            </MagneticButton>
          </form>
        )}
      </div>
    </section>
  )
}
