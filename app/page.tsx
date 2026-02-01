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
              className="flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl p-3 transition hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl tracking-[0.2em] sm:h-24 sm:w-24">
                <div className="text-3xl font-semibold sm:text-4xl">&gt;_</div>
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
              className="flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl p-3 transition hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
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
              className="flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl p-3 transition hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">Stablegate</h2>
                <p className="text-sm text-zinc-600 sm:text-base">
                  Stablecoin stuff
                </p>
              </div>
            </a>
            <a
              href="https://defi-terminal.xyz"
              target="_blank"
              rel="noreferrer"
              className="flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl p-3 transition hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">defi-terminal</h2>
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
              className="flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl p-3 transition hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
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
              className="flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl p-3 transition hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
              <div className="flex w-full flex-col gap-1 px-0 sm:px-2">
                <h2 className="text-xl font-semibold sm:text-2xl">stream.gift</h2>
                <p className="text-sm text-zinc-600 sm:text-base">
                  send crypto donations to livestreamers
                </p>
              </div>
            </a>

            <a
              href="https://awpswap.io"
              target="_blank"
              rel="noreferrer"
              className="flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl p-3 transition hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
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
              className="flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl p-3 transition hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
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
              className="flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl p-3 transition hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
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
              className="flex h-max w-full flex-col items-start justify-start gap-3 rounded-2xl p-3 transition hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-4 sm:p-4"
            >
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
