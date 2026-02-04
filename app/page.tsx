export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Nick Mura
          </h1>
          <p className="text-sm text-zinc-600 sm:text-base">
            a collection of projects & artifacts ive made or worked on
          </p>
          <p className="text-sm sm:text-base ">
            <a className='hover:text-indigo-500'>Contact: dev@nickmura.ca </a> 
            <a className='hover:text-indigo-500' target='_blank' href='https://github.com/nickmura'>GitHub </a> 
            <a className='hover:text-indigo-500' target='_blank' href='https://t.me/nickmura2'>Telegram </a> 
            <a className='hover:text-indigo-500' target='_blank' href='https://mastodon.social/@nickmura'>Mastodon </a>
            <a className='hover:text-indigo-500' target='_blank' href='https://x.com/nickmura2'>Twitter/X</a>
             
          </p>


        </header>

        <section className="w-full">
          <div className="flex w-full flex-col gap-4">
            <a
              href="https://dappterminal.com"
              target="_blank"
              rel="noreferrer"
              className="group flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl border border-transparent bg-white/80 p-3 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-200 hover:bg-zinc-50 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-all duration-200 group-hover:scale-105 group-hover:bg-black group-hover:text-white sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 sm:h-9 sm:w-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="M7 9l3 3-3 3" />
                  <path d="M12 15h5" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">dappterminal.com</h2>
                <p className="text-sm text-zinc-600 sm:text-base">
                  command line interface for DeFi operations across 8+ protocols
                  and data providers
                </p>
              </div>
            </a>
            <a
              href="https://github.com/nickmura/AudioClipper"
              target="_blank"
              rel="noreferrer"
              className="group flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl border border-transparent bg-white/80 p-3 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-200 hover:bg-zinc-50 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-all duration-200 group-hover:scale-105 group-hover:bg-black group-hover:text-white sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 sm:h-9 sm:w-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12h3l2-4 3 8 3-10 2 6h5" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">AudioClipper</h2>
                <p className="text-sm text-zinc-600 sm:text-base">
                  DSP soft clipper with 4 algorithms & oversampling for DAW post-processing
                </p>
              </div>
            </a>
            <a
              href="https://stablegate.xyz"
              target="_blank"
              rel="noreferrer"
              className="group flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl border border-transparent bg-white/80 p-3 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-200 hover:bg-zinc-50 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-all duration-200 group-hover:scale-105 group-hover:bg-black group-hover:text-white sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 sm:h-9 sm:w-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="6" />
                  <g strokeWidth="2">
                    <path d="M12 8.5v7" />
                    <path d="M10.5 10.2h3" />
                    <path d="M10.5 13.8h3" />
                  </g>
                </svg>
              </div>
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">stablegate.xyz</h2>
                <p className="text-sm text-zinc-600 sm:text-base">
                  Stablecoin solutions & consulting
                </p>
              </div>
            </a>
            <a
              href="https://defi-terminal.xyz"
              target="_blank"
              rel="noreferrer"
              className="group flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl border border-transparent bg-white/80 p-3 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-200 hover:bg-zinc-50 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-all duration-200 group-hover:scale-105 group-hover:bg-black group-hover:text-white sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 sm:h-9 sm:w-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="M7 9l3 3-3 3" />
                  <path d="M12 15h5" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">defi-terminal.xyz</h2>
                <p className="text-sm text-zinc-600 sm:text-base">
                  command line interface for DeFi operations on 1inch, built in
                  a week for the 1inch hackathon (predecessor to dappTerminal)
                </p>
              </div>
            </a>
            <a
              href="https://wonway.xyz"
              target="_blank"
              rel="noreferrer"
              className="group flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl border border-transparent bg-white/80 p-3 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-200 hover:bg-zinc-50 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-all duration-200 group-hover:scale-105 group-hover:bg-black group-hover:text-white sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 sm:h-9 sm:w-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 7h12l-1 11H7z" />
                  <path d="M9 7a3 3 0 0 1 6 0" />
                  <path d="M9 12h6" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">wonway.xyz</h2>
                <p className="text-sm text-zinc-600 sm:text-base">
                  Korean stablecoin merchant payments on eCommerce, built in a
                  week for Kaia hackathon
                </p>
              </div>
            </a>
            <a
              href="https://stream.gift"
              target="_blank"
              rel="noreferrer"
              className="group flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl border border-transparent bg-white/80 p-3 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-200 hover:bg-zinc-50 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-all duration-200 group-hover:scale-105 group-hover:bg-black group-hover:text-white sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 sm:h-9 sm:w-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12.5 10.5c-1.3-1.3-3.4-1.3-4.7 0s-1.3 3.4 0 4.7l4.7 4.7 4.7-4.7c1.3-1.3 1.3-3.4 0-4.7s-3.4-1.3-4.7 0z" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">stream.gift</h2>
                <p className="text-sm text-zinc-600 sm:text-base">
                  send crypto donations & fundraise livestreamers
                </p>
              </div>
            </a>

            <a
              href="https://awpswap.io"
              target="_blank"
              rel="noreferrer"
              className="group flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl border border-transparent bg-white/80 p-3 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-200 hover:bg-zinc-50 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-all duration-200 group-hover:scale-105 group-hover:bg-black group-hover:text-white sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 sm:h-9 sm:w-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10l3 5-3 5H7l-3-5z" />
                  <path d="M9 12h6" />
                  <path d="M10.5 9.5L8 12l2.5 2.5" />
                  <path d="M13.5 14.5L16 12l-2.5-2.5" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">AWPSwap.io</h2>
                <p className="text-sm text-zinc-600 sm:text-base">
                  swap cs2 skins for crypto instantly
                </p>
              </div>
            </a>

            <a
              href="https://receive.me"
              target="_blank"
              rel="noreferrer"
              className="group flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl border border-transparent bg-white/80 p-3 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-200 hover:bg-zinc-50 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-all duration-200 group-hover:scale-105 group-hover:bg-black group-hover:text-white sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 sm:h-9 sm:w-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
                  <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">receive.me</h2>
                <p className="text-sm text-zinc-600 sm:text-base">
                  web3 address/link profiles
                </p>
              </div>
            </a>
            <a
              href="https://bobbybot.trade"
              target="_blank"
              rel="noreferrer"
              className="group flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl border border-transparent bg-white/80 p-3 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-200 hover:bg-zinc-50 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-all duration-200 group-hover:scale-105 group-hover:bg-black group-hover:text-white sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 sm:h-9 sm:w-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8" cy="10" r="3" />
                  <path d="M11 10h6" />
                  <path d="M17 10v3" />
                  <path d="M15 13h2" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">bobbybot.trade</h2>
                <p className="text-sm text-zinc-600 sm:text-base">
                  trade TF2 keys for crypto
                </p>
              </div>
            </a>
            <a
              href="https://beta.trxmini.games"
              target="_blank"
              rel="noreferrer"
              className="group flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl border border-transparent bg-white/80 p-3 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-200 hover:bg-zinc-50 hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-all duration-200 group-hover:scale-105 group-hover:bg-black group-hover:text-white sm:h-20 sm:w-20">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-7 w-7 sm:h-9 sm:w-9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 18h8" />
                  <path d="M9 18l1-4h4l1 4" />
                  <path d="M10.5 14V9" />
                  <path d="M13.5 14V9" />
                  <path d="M10 9h4" />
                  <path d="M9 7h6" />
                  <path d="M11 5h2" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">trxmini.games</h2>
                <p className="text-sm text-zinc-600 sm:text-base">
                  wager chess against your friends for TRX/USDT
                </p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
