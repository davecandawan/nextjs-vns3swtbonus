import React, { useState } from 'react';
import Image from 'next/image';
import FooterModal from './FooterModal';

interface FooterColumnProps {
  imgUrl: string;
  title: string;
  text: string;
  imgWidth?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ imgUrl, title, text }) => {
  return (
    <div className="flex-1 min-w-[280px] max-w-[380px] p-1 text-center">
      <div className="h-full flex flex-col items-center">
        <div className="flex items-center justify-center w-full" style={{ height: '150px' }}>
          <div className="relative w-full h-full max-w-[310px]">
            <Image
              src={imgUrl}
              alt={title}
              width={310}
              height={186}
              className="object-contain w-full h-full"
              quality={100}
              priority
              unoptimized={process.env.NODE_ENV !== 'production'}
              style={{
                objectFit: 'contain',
                imageRendering: 'crisp-edges',
              }}
              sizes="(max-width: 768px) 150px, 200px"
            />
          </div>
        </div>
        <h3 className="text-lg font-bold mt-4 mb-2 text-black whitespace-nowrap">{title}</h3>
        <p className="text-black text-base leading-tight">{text}</p>
      </div>
    </div>
  );
};

interface FooterLinkProps {
  label: string;
  id: string;
  onClick: (id: string) => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, id, onClick }) => (
  <a
    className="text-black cursor-pointer hover:text-black transition-colors duration-300 mx-2"
    onClick={e => {
      e.preventDefault();
      onClick(id);
    }}
  >
    {label}
  </a>
);

const FooterLinks: React.FC<{ loadInfo: (id: string) => void }> = ({ loadInfo }) => (
  <div className="w-full text-lg text-center flex flex-wrap justify-center items-center space-x-4">
    <FooterLink label="Terms & Disclaimer" id="terms-pop-modal" onClick={loadInfo} />
    <FooterLink label="Privacy Policy" id="privacy-policy-modal" onClick={loadInfo} />
    <FooterLink label="Shipping Policy" id="shipping-policy-modal" onClick={loadInfo} />
    <FooterLink label="Return Policy" id="return-policy-modal" onClick={loadInfo} />
  </div>
);

const Footer: React.FC = () => {
  const [modalId, setModalId] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [scrollbarWidth, setScrollbarWidth] = useState<number>(0);
  const [bodyPaddingRight, setBodyPaddingRight] = useState<string>('');

  // Store the original scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  const loadInfo = (id: string) => {
    // Save current scroll position
    setScrollPosition(window.scrollY);
    setModalId(id);
    setIsAnimating(true);
    setShowModal(true);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setShowModal(false);
      setModalId('');
      // Restore scroll position
      window.scrollTo(0, scrollPosition);
    }, 300); // Match this with the transition duration
  };

  return (
    <footer className="w-full mt-2 bg-white px-0 pb-8">
      <div className="pt-4 pb-4 text-black bg-white w-full">
        <div className="py-1">
          <div className="w-full flex flex-wrap justify-center gap-1">
            <div className="flex-1 min-w-[280px] max-w-[380px] p-1 text-center">
              <div className="h-full flex flex-col items-center">
                <div
                  className="flex items-center justify-center w-full"
                  style={{ height: '150px' }}
                >
                  <div className="relative w-full h-full max-w-[310px]">
                    <Image
                      src="/contentimages/MoneyBack.avif"
                      alt="60-Day Money Back Guarantee"
                      width={310}
                      height={186}
                      className="w-auto h-auto max-w-full max-h-full"
                      quality={100}
                      priority
                      unoptimized={false}
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-extrabold mt-4 mb-2 text-black whitespace-nowrap">
                  60-Day Money Back Guarantee
                </h3>
                <p className="text-black text-base leading-tight w-full">
                  No question asked 60 day refund or replacement guaranteed. If you are unhappy for
                  any reason, get your money back. Rock solid guarantee...
                </p>
              </div>
            </div>
            <div className="flex-1 min-w-[280px] max-w-[380px] p-1 text-center">
              <div className="h-full flex flex-col items-center">
                <div
                  className="flex items-center justify-center w-full"
                  style={{ height: '150px' }}
                >
                  <div className="relative w-full h-full max-w-[310px]">
                    <Image
                      src="/contentimages/USFlag.avif"
                      alt="Thank You!"
                      width={310}
                      height={186}
                      className="w-auto h-auto max-w-full max-h-full"
                      quality={100}
                      priority
                      unoptimized={false}
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-extrabold mt-4 mb-2 text-black whitespace-nowrap">
                  Thank You!
                </h3>
                <p className="text-black text-base leading-tight w-full">
                  Your purchase supports the second amendment community and increases our ability to
                  defend ourselves and remain free.
                </p>
              </div>
            </div>
            <div className="flex-1 min-w-[280px] max-w-[380px] p-1 text-center">
              <div className="h-full flex flex-col items-center">
                <div
                  className="flex items-center justify-center w-full"
                  style={{ height: '150px' }}
                >
                  <div className="relative w-full h-full max-w-[310px]">
                    <Image
                      src="/contentimages/vnsh_secure_payment_footer.webp"
                      alt="100% Secure Payment"
                      width={310}
                      height={186}
                      className="w-auto h-auto max-w-full max-h-full"
                      quality={100}
                      priority
                      unoptimized={false}
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-extrabold mt-4 mb-2 text-black whitespace-nowrap">
                  100% Secure Payment
                </h3>
                <p className="text-black text-base leading-tight w-full">
                  All orders are AES-256 Bit encrypted through a HTTPS secure network. We respect
                  your privacy...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-lg text-center text-black -mb-1">
            © <b>2025 VNSH.com</b> All Rights Reserved.
          </div>
          <div className="mt-4">
            <FooterLinks loadInfo={loadInfo} />
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className={`fixed inset-0 z-50 p-4 pt-20 flex items-start justify-center transition-opacity duration-300 ease-out ${isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto relative p-1 mx-auto transform transition-all duration-300 ease-out ${isAnimating ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-black hover:text-black bg-transparent border-none hover:bg-transparent"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <FooterModal modalId={modalId} closeModal={closeModal} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
