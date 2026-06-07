export default function FocusBrainLanding() {
  const handleCTA = () => {
    window.open('https://pay.hotmart.com/E106044240T?checkoutMode=10', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-7 sm:w-8 h-7 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">FB</div>
            <span className="text-base sm:text-lg font-semibold">FocusBrain</span>
          </div>
          <button
            onClick={handleCTA}
            className="px-4 sm:px-6 py-1.5 sm:py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Get Access
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 sm:pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
          {/* Left Side - Copy */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs md:text-sm">
                <span className="text-blue-400 font-semibold">FOUNDER LAUNCH • $15 USD</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                You know exactly what's wrong.
                <span className="text-blue-400 block">You just don't know how to fix it.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
                Your mind is constantly jumping between ideas. Your projects pile up unfinished. And the worst part? You know you're capable of more. You're not lazy. You're fragmented. That ends here.
              </p>
            </div>

            {/* Value Proposition Quick */}
            <div className="space-y-2.5 md:space-y-3 pt-2 md:pt-4">
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-blue-400 text-lg md:text-xl font-bold mt-0.5 flex-shrink-0">→</span>
                <p className="text-slate-200 text-sm md:text-base">A proven framework that closes the mental loops draining your energy daily</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-blue-400 text-lg md:text-xl font-bold mt-0.5 flex-shrink-0">→</span>
                <p className="text-slate-200 text-sm md:text-base">The 15-minute ritual that prevents your mind from scattering every single morning</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <span className="text-blue-400 text-lg md:text-xl font-bold mt-0.5 flex-shrink-0">→</span>
                <p className="text-slate-200 text-sm md:text-base">A clear path to actually finishing something before the next idea takes over</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-6">
              <button
                onClick={handleCTA}
                className="px-6 md:px-8 py-3 md:py-4 bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Get Access Now
              </button>
              <button
                onClick={handleCTA}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-slate-400 hover:border-blue-400 text-slate-200 hover:text-white text-sm md:text-base rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto"
              >
                See What's Inside
              </button>
            </div>
          </div>

          {/* Right Side - Visual Value */}
          <div className="relative h-auto hidden md:flex items-center justify-center">
            <img
              src="./hero.png"
              alt="FocusBrain bonuses and benefits"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* The Problem Section - Visual */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-20 border-t border-blue-500/20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">The Cycle You Can't Escape</h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">You're not lazy. Your system is.</p>
        </div>

        {/* Image Container */}
        <div className="max-w-5xl mx-auto mb-12 rounded-xl overflow-hidden border border-blue-500/20">
          <img
            src="./imagen_before_and_after.png"
            alt="Before and After visualization of FocusBrain transformation"
            className="w-full h-auto"
          />
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Before Column */}
            <div className="rounded-xl md:rounded-2xl overflow-hidden border-2 border-red-500/40 bg-gradient-to-br from-red-950/30 to-slate-900/30">
              <div className="bg-red-500/20 border-b border-red-500/30 px-4 md:px-6 py-3 md:py-4">
                <h3 className="text-xl md:text-2xl font-bold text-red-400 flex items-center gap-2">
                  <span className="text-xl md:text-2xl">⚠️</span> The Before
                </h3>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-slate-300 text-sm md:text-base">Overwhelmed State:</p>
                  <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-slate-400">
                    <li className="flex gap-2">
                      <span className="text-red-400 flex-shrink-0">✕</span>
                      <span>47 unfinished ideas</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-400 flex-shrink-0">✕</span>
                      <span>Constantly changing direction</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-400 flex-shrink-0">✕</span>
                      <span>Mental clutter & scattered focus</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-400 flex-shrink-0">✕</span>
                      <span>Endless overthinking</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-400 flex-shrink-0">✕</span>
                      <span>Lost confidence</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 md:pt-4 border-t border-red-500/20">
                  <p className="text-xs text-red-400/70 italic">
                    "Every unfinished project keeps a mental tab open. Your brain holds the burden."
                  </p>
                </div>
              </div>
            </div>

            {/* After Column */}
            <div className="rounded-xl md:rounded-2xl overflow-hidden border-2 border-blue-500/40 bg-gradient-to-br from-blue-950/30 to-slate-900/30">
              <div className="bg-blue-500/20 border-b border-blue-500/30 px-4 md:px-6 py-3 md:py-4">
                <h3 className="text-xl md:text-2xl font-bold text-blue-400 flex items-center gap-2">
                  <span className="text-xl md:text-2xl">⚡</span> The After
                </h3>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-slate-300 text-sm md:text-base">Unstoppable State:</p>
                  <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-slate-300">
                    <li className="flex gap-2">
                      <span className="text-blue-400 flex-shrink-0">✓</span>
                      <span>One clear direction</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400 flex-shrink-0">✓</span>
                      <span>Better decisions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400 flex-shrink-0">✓</span>
                      <span>Consistent action & momentum</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400 flex-shrink-0">✓</span>
                      <span>Real, measurable progress</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400 flex-shrink-0">✓</span>
                      <span>Finished projects</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 md:pt-4 border-t border-blue-500/20">
                  <p className="text-xs text-blue-400/70 italic">
                    "You close the loops. Your mind is free. You finish what you start."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Difference */}
          <div className="mt-6 md:mt-8 text-center">
            <div className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 rounded-lg md:rounded-xl">
              <p className="text-base md:text-lg font-semibold text-slate-200">
                <span className="text-blue-400">The difference?</span> A system that actually works.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Solution */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 border-t border-blue-500/20">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">The Only Thing That Works</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">You don't need more discipline. You need a system that actually closes the loops.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-8 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">The Open Loops Method</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Identify every unfinished project living in your head. Externalize them. Make a real decision on each one: finish it, pause it, or delete it. That's it. Your brain stops holding them hostage. The mental burden disappears. You get your mental space back.
            </p>
          </div>

          <div className="p-8 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">The Clarity Filter</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Not every idea deserves your time. Learn to distinguish between genuine goals and temporary excitement. Learn what you actually want versus what you think you should want. This filter alone will change your life because you'll stop wasting energy on things that don't matter.
            </p>
          </div>

          <div className="p-8 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">The 72-Hour Rule</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Motivation disappears fast. So you don't wait for it. Within 72 hours of deciding on something, you move. You take action. This breaks the overthinking trap. You stop planning and start doing. And momentum builds from there.
            </p>
          </div>

          <div className="p-8 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Identity Through Action</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Stop trying to become more disciplined. You can't think your way into that. But you can build evidence. Finish something. Then finish something else. You're not becoming disciplined. You're becoming someone who follows through. And that's a completely different thing.
            </p>
          </div>
        </div>
      </div>

      {/* What You Get - MASSIVE VALUE SECTION */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 border-t border-blue-500/20">
        <div className="max-w-5xl mx-auto">
          <img
            src="./prices.png"
            alt="Everything You Need to Break Free - Pricing and Benefits"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>

      {/* Before vs After */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 border-t border-blue-500/20">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">The Life You Deserve</h2>
          <p className="text-lg text-slate-400">From scattered to unstoppable</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Before */}
          <div className="p-8 bg-slate-800/30 border-2 border-red-500/30 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-red-400">Right Now: The Struggle</h3>
            <ul className="space-y-4">
              {[
                'Too many ideas competing for your attention',
                'Starting projects but never finishing them',
                'Constant mental noise from unfinished work',
                'Spending more time researching than doing',
                'Feeling busy but making no real progress',
                'Wondering if you\'ll ever deliver something meaningful',
                'Losing confidence in your own abilities'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="text-red-400 font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="p-8 bg-blue-500/10 border-2 border-blue-500/50 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">With FocusBrain: Freedom</h3>
            <ul className="space-y-4">
              {[
                'Crystal clarity on what actually matters to you',
                'Finishing projects. Regularly. Without guilt.',
                'Mental space and peace of mind',
                'Action first. Planning only when needed.',
                'Real, measurable progress every single week',
                'Proving to yourself what you\'re capable of',
                'Confidence that comes from actually following through'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                  <span className="text-blue-400 font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Why FocusBrain Is Different */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 border-t border-blue-500/20">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why FocusBrain Is Different</h2>
          <p className="text-lg text-slate-400">Because everything else has failed you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              wrong: 'Most productivity systems tell you to do more',
              right: 'FocusBrain teaches you to choose better'
            },
            {
              wrong: 'Most systems help you manage tasks endlessly',
              right: 'FocusBrain helps you organize your thinking and make real decisions'
            },
            {
              wrong: 'Most systems push harder and require willpower',
              right: 'FocusBrain removes the mental noise so action becomes easy'
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <p className="text-slate-500 text-sm font-semibold mb-3">The Trap:</p>
              <p className="text-slate-300 mb-6 italic">{item.wrong}</p>
              <p className="text-blue-400 text-sm font-semibold mb-3">What Actually Works:</p>
              <p className="text-slate-100 font-semibold">{item.right}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section - LOGICAL NEXT STEP */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 border-t border-blue-500/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">The Only Question Left</h2>
            <p className="text-xl text-slate-300">You know the problem. You know what needs to change. You've seen the framework that works.</p>
            <p className="text-xl text-slate-300 mt-4">Now it's time to actually close the loops.</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/10 border-2 border-blue-500/50 rounded-3xl p-12 text-center">
            <p className="text-slate-400 text-sm mb-4">FOUNDER EARLY ACCESS PRICING</p>

            <div className="text-6xl font-bold mb-2">
              <span className="text-blue-400">$15</span>
            </div>

            <p className="text-slate-400 text-sm mb-1">
              <span className="line-through text-slate-500">$47</span> regular price
            </p>
            <p className="text-slate-500 text-xs mb-8">Limited time. Founder pricing.</p>

            <div className="space-y-3 mb-8 text-left max-w-lg mx-auto bg-slate-900/50 p-6 rounded-xl border border-slate-800/50">
              <p className="flex items-center gap-3 text-slate-200">
                <span className="text-blue-400 font-bold text-lg">→</span> One payment. Instant access to everything.
              </p>
              <p className="flex items-center gap-3 text-slate-200">
                <span className="text-blue-400 font-bold text-lg">→</span> No subscription. No recurring charges.
              </p>
              <p className="flex items-center gap-3 text-slate-200">
                <span className="text-blue-400 font-bold text-lg">→</span> Lifetime
              </p>
              <p className="flex items-center gap-3 text-slate-200">
                <span className="text-blue-400 font-bold text-lg">→</span> 7-day money back guarantee
              </p>
            </div>

            <button
              onClick={handleCTA}
              className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50 mb-6"
            >
              Access FocusBrain Right Now
            </button>

            <p className="text-slate-500 text-sm">
              That's less than a coffee. For a system that will change how you work for the rest of your life.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 border-t border-blue-500/20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">
              How many more unfinished projects will you carry?
            </h2>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              You already know what needs to happen. You've already felt the pain of abandoning projects. You've already lost confidence in yourself more than once.
            </p>

            <p className="text-xl text-blue-400 font-semibold">The only question is: when do you stop and take action?</p>
          </div>

          <button
            onClick={handleCTA}
            className="inline-block px-10 py-5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Get Your Framework Now
          </button>

          <p className="text-slate-500 text-sm">
            Stop planning. Start finishing. Your life is waiting.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-blue-500/20 py-8 px-4 text-center text-slate-500 text-sm">
        <p>FocusBrain • Clarity. Focus. Direction.</p>
        <p className="mt-2">30-day money-back guarantee. No questions asked.</p>
      </div>
    </div>
  );
}
