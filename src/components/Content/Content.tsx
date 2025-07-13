import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

const VidalyticsVideo = dynamic(() => import('../VidalyticsVideo/VidalyticsVideo'), {
  ssr: false,
});

const YotpoReview = dynamic(() => import('../Yotpo/YotpoReview').then(mod => mod.default), {
  ssr: false,
});

interface ContentProps {
  buttonText?: string;
}

const Content: React.FC<ContentProps> = ({
  buttonText = 'Give Me My VNSH Holster + FREE Shockwave Torch',
}) => {
  const searchParams = useSearchParams();

  // Get all current URL parameters
  const getCheckoutUrl = (baseUrl: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryString = params.toString();
    return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
  };

  return (
    <div className="min-h-screen bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
      <div className="sticky top-0 left-0 right-0 w-full bg-custom-green text-black text-center py-2 px-4 text-[1.3rem] sm:text-[1.5rem] font-semibold z-50 shadow-md">
        FREE 9,000 Volt Stun Gun With Every Order! (Normally{' '}
        <span className="line-through">$44</span>)
      </div>
      <div className="w-full max-w-[1140px] mx-auto px-5 py-4 lg:px-20 bg-white">
        <div className="space-y-8">
          <header className="text-center py-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug md:leading-tight mb-4 px-2">
              <span className="font-bold italic">Insanely Comfy Holster</span> Makes Any Semi-Auto
              (Plus 2 Extra Mags) <span className="font-bold italic">Disappear In Plain Sight</span>{' '}
              Even If You Wear
              <span className="underline"> Nothing But Gym Shorts, Sweatpants and T-Shirts!</span>
            </h1>
            <span className="text-xl md:text-2xl font-semibold text-red-600 px-4 pt-1 pb-0 inline-block italic">
              <span className="bg-[#ff0] px-1 py-1">
                Guaranteed Comfort Or 100% Of Your Money Back!
              </span>
            </span>
          </header>

          <div className="w-full max-w-4xl mx-auto -mt-4">
            <VidalyticsVideo />
          </div>

          <div className="text-center my-8 md:my-10">
            <a
              href={getCheckoutUrl('https://secure.vnsh.com/vns3qdbonus/checkout')}
              className="inline-block"
            >
              <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
                {buttonText}
              </button>
            </a>
          </div>
          <header className="text-center py-1 md:py-6">
            <span className="text-2xl md:text-5xl font-bold leading-normal md:leading-[1.3]">
              <span className="bg-[#ffa500] px-0.5 py-0.5">
                Discover Why Over 175,234 Americans Are Carrying With VNSH…
              </span>
            </span>
          </header>

          <div className="w-full max-w-7xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl font-medium leading-normal">
              Literally <span className="font-bold italic">hundreds of thousands</span> of Americans
              are using VNSH to carry comfortably all day, every day.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              The biggest reason why is…
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              It’s GUARANTEED to be <span className="font-bold">the most comfortable holster</span>{' '}
              you’ll ever wear -{' '}
              <span className="font-bold bg-[#ff0]">or you get 100% of your money back!</span>
            </p>
            <div className="mx-auto w-full md:max-w-[70%]">
              <Image
                src="/contentimages/guaranteed_banner.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              <span className="font-bold">What makes it so comfortable??</span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">The secret is our…</p>
            <header className="text-center py-1">
              <span className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.2] text-[#f16500]">
                Ultra-Plush <span className="text-[#ff0000]">"Yoga Pant" Material</span> Belt + a
                Robust Cordura Holster Body That'll{' '}
                <span className="text-[#ff0000]">Never Dig or Poke</span>
              </span>
            </header>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              Unlike traditional holsters that require a{' '}
              <span className="font-bold">bulky tactical belt</span> and constantly{' '}
              <span className="font-bold">jab at your body</span>…
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              VNSH uses a durable but stretchy built-in belt that{' '}
              <span className="font-bold">never digs or pokes</span>.
            </p>
            <div className="space-y-0 pl-10">
              <div className="flex items-start space-x-2">
                <Image
                  src="/contentimages/greenCheck.png"
                  alt="Checkmark"
                  width={24}
                  height={24}
                  className="mt-1 flex-shrink-0"
                />
                <p className="text-xl md:text-2xl font-medium leading-normal">
                  Effortlessly wicks sweat…
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <Image
                  src="/contentimages/greenCheck.png"
                  alt="Checkmark"
                  width={24}
                  height={24}
                  className="mt-1 flex-shrink-0"
                />
                <p className="text-xl md:text-2xl font-medium leading-normal">
                  Never retains odor…
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <Image
                  src="/contentimages/greenCheck.png"
                  alt="Checkmark"
                  width={24}
                  height={24}
                  className="mt-1 flex-shrink-0"
                />
                <p className="text-xl md:text-2xl font-medium leading-normal">
                  Feels softer than your favorite PJs on Christmas morning…
                </p>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              … combined with a super tough Cordura blend holster body that gives you{' '}
              <span className="font-bold">top-notch retention</span> – with a non-rigid feel that’ll
              make you forget you're carrying at all
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              Plus, VNSH makes just about ANY semi auto{' '}
              <span className="font-bold underline">disappear in plain sight.</span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              <span className="italic">How many other holsters can do all that??</span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              <span className="font-bold">The answer is ZERO.</span>
            </p>
            <div className="text-center my-8 md:my-10">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3qdbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
                  {buttonText}
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1 font-bold">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <div className="my-8 w-full">
              <YotpoReview />
            </div>
            <div className="text-center my-8 md:my-10">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3qdbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
                  {buttonText}
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1 font-bold">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <span className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.2] text-[#f16500]">
                Seriously, This Holster Works With 99.9% of Semi-Automatic Pistols On the Planet
              </span>
            </header>
            <div className="mx-auto w-full md:max-w-[80%]">
              <Image
                src="/contentimages/BlackHolsterDesktop3.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              Our holster design means that{' '}
              <span className="font-bold">regardless of what pistol you own…</span> it will help you
              safely and comfortably carry it.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              No more needing to buy multiple holsters for all your pistols.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              Plus, since it has 2-built in mag pouches, now{' '}
              <span className="font-bold">you don’t need to spend extra money on mag pouches</span>{' '}
              to guarantee you’re never out of the fight.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              Take a look at the list of brands our holster works with and then grab yours before
              the price goes up!
            </p>
            <div className="w-full my-8 px-4">
              {/* Desktop Image */}
              <div className="hidden md:block w-full">
                <div className="mx-auto w-[90%] max-w-[1400px]">
                  <Image
                    src="/contentimages/LogoDesktop1.webp"
                    alt="Logo"
                    width={1400}
                    height={1000}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </div>
              {/* Mobile Image */}
              <div className="block md:hidden">
                <Image
                  src="/contentimages/LogoMobile2.webp"
                  alt="Logo mobile"
                  width={500}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
            <div className="text-center my-8 md:my-10">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3qdbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
                  {buttonText}
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-bold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.2] text-[#f16500]">
                <div className="text-[#ff0000] italic">
                  Limited FREE Bonus Gift (This Page ONLY)
                </div>
                <div>
                  Every Holster Comes With a{' '}
                  <span className="text-[#ff0000] italic">
                    Complimentary 9,000 Volt Shockwave Torch!
                  </span>
                </div>
              </div>
            </header>
            <div className="mx-auto w-full md:max-w-[80%]">
              <Image
                src="/contentimages/Big-mobile.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl leading-normal">
              For a short time, we’re sending out these{' '}
              <span className="font-bold italic">vicious Shockwave Torch stun guns</span> –{' '}
              <span className="bg-[#ff0] px-1">
                100% FREE with every holster order (from this page ONLY!)
              </span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              <span className="font-bold underline">Why??</span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              Well, we originally planned to sell these “gun-free zone weapons” under the VNSH
              brand…
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              However, we’ve decided the VNSH brand should focus solely on firearms accessories…
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              …which means the Shockwave Torch won’t be sold by VNSH any longer – it will only be
              available from our sister company{' '}
              <span className="font-bold italic">Pain Safari</span>.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              <span className="font-bold bg-[#ff0] px-1">
                That’s bad news for us… but GREAT NEWS for you because…
              </span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              We have a bunch of Shockwave Torches with old VNSH packaging that we need to get out
              of our warehouse…{' '}
              <span className="font-bold italic underline">so we’re handing them out FREE!</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-10">
              {/* First Column - Text */}
              <div className="space-y-6 md:space-y-24 md:col-span-2">
                {/* First Text Block */}
                <div className="flex items-start space-x-3">
                  <Image
                    src="/contentimages/greenCheck.png"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="mt-1 flex-shrink-0"
                  />
                  <p className="text-xl md:text-2xl font-medium leading-normal">
                    <span className="font-bold text-[#ff0000]">
                      Requires Zero License, Background Check, or Paperwork
                    </span>{' '}
                    - so Uncle Sam will never even know you have one.
                  </p>
                </div>

                {/* Second Text Block */}
                <div className="flex items-start space-x-3">
                  <Image
                    src="/contentimages/greenCheck.png"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="mt-1 flex-shrink-0"
                  />
                  <p className="text-xl md:text-2xl font-medium leading-normal">
                    <span className="font-bold text-[#ff0000]">
                      Lets You Carry True "Knock-Down" Power In Gun-Free Zones
                    </span>{' '}
                    - take it all the places guns could never go, so you're never left vulnerable.
                  </p>
                </div>

                {/* Third Text Block */}
                <div className="flex items-start space-x-3">
                  <Image
                    src="/contentimages/greenCheck.png"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="mt-1 flex-shrink-0"
                  />
                  <p className="text-xl md:text-2xl font-medium leading-normal">
                    <span className="font-bold text-[#ff0000]">
                      Packs 9,000 Volts and 1.5 Microcoulombs
                    </span>{' '}
                    - research by the National Institute of Justice shows just 1 microcoulomb causes
                    "intolerable pain,"{' '}
                    <span className="underline">so you can imagine what 1.5 feels like!</span>
                  </p>
                </div>

                {/* Fourth Text Block */}
                <div className="flex items-start space-x-3">
                  <Image
                    src="/contentimages/greenCheck.png"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    className="mt-1 flex-shrink-0"
                  />
                  <p className="text-xl md:text-2xl font-medium leading-normal">
                    <span className="font-bold text-[#ff0000]">
                      Gives You a "Liability-Free" Way to Put Down Thugs
                    </span>{' '}
                    - you have to be 100% positive you're in the right before using your gun, but
                    you'll never have to think twice about using the Shockwave.
                  </p>
                </div>
              </div>

              {/* Second Column - Images */}
              <div className="space-y-8">
                <div className="w-full max-w-[260px] mx-auto">
                  <Image
                    src="/contentimages/swt1.webp"
                    alt="Gun-Free Zone Protection"
                    width={260}
                    height={260}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="w-full max-w-[260px] mx-auto">
                  <Image
                    src="/contentimages/img2-vnsh3swtbonus-mobile.jpg"
                    alt="High Voltage Protection"
                    width={260}
                    height={260}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="w-full max-w-[260px] mx-auto">
                  <Image
                    src="/contentimages/img3-vns3swtbonus-mobile.webp"
                    alt="Liability-Free Protection"
                    width={260}
                    height={260}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-medium leading-normal">Normally $44.97…</p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              The absolutely BRUTAL Shockwave Torch is yours{' '}
              <span className="font-bold italic bg-[#ff0] px-1">totally FREE</span> with your
              holster order today!
            </p>
            <p className="text-xl md:text-2xl font-medium leading-normal">
              Plus, when you grab this deal, you’ll be doing so{' '}
              <span className="font-bold italic">100% Risk-Free</span>, because…
            </p>
            <div className="text-center my-8 md:my-10">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3qdbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
                  {buttonText}
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.0] text-[#f16500]">
                <div>You’re Getting An</div>
                <div className="my-0 md:my-2">
                  <span className="text-[rgb(255,0,0)]">Iron-Clad, Money-Back </span>
                  <span>Guarantee</span>
                </div>
              </div>
            </header>
            <div className="w-4/5 md:w-[30%] mx-auto max-w-[1120px] px-4 md:px-0">
              <Image
                src="/contentimages/guarantee-money-back-200.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Love everything about your order, or{' '}
              <b>
                <em>we’ll refund you every penny.</em>
              </b>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">It’s that simple.</p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              If you aren’t totally thrilled, all you have to do is contact our{' '}
              <span className="font-bold">
                <span className="italic">US-Based Support Team</span>
              </span>{' '}
              within 60 days to get a full refund.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              <span className="bg-[#ff0] py-1">
                Plus, we also give you a{' '}
                <span className="font-bold">
                  <span className="italic">2-year workmanship guarantee</span>
                </span>{' '}
                as well!
              </span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              We know you’ll love your VNSH gear, which is why we’re happy to extend you these
              iron-clad guarantees.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              So if you want to get an awesome price on the world’s most comfortable holster…
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              <span className="font-bold">
                <span className="italic">Plus… get a FREE Shockwave Torch at the same time…</span>
              </span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Then you owe it to yourself to grab this deal now!
            </p>
            <div className="text-center my-8 md:my-10">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vns3qdbonus/checkout')}
                className="inline-block"
              >
                <button className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 px-8 text-xl md:py-3 md:px-10 md:text-3xl transition-all duration-300 animate-custom-pulse hover:opacity-100 hover:scale-105 transform">
                  {buttonText}
                </button>
              </a>
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            {/* Testimonial Images */}
            <div className="w-full my-8">
              {/* Desktop Image */}
              <div className="hidden md:block">
                <Image
                  src="/contentimages/TestimoniesDesktop1.webp"
                  alt="Customer testimonials"
                  width={1400}
                  height={1000}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
              {/* Mobile Image */}
              <div className="block md:hidden">
                <Image
                  src="/contentimages/vnsh_TestimoniesMobile.webp"
                  alt="Customer testimonials mobile"
                  width={500}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
