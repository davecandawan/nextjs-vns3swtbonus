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
    <div className="flex-1 min-w-[250px] max-w-[350px] p-4 text-center">
      <div className="h-full flex flex-col items-center">
        <div className="flex items-center justify-center w-full" style={{ height: '120px' }}>
          <div className="relative w-full h-full max-w-[200px]">
            <Image
              src={imgUrl}
              alt={title}
              width={200}
              height={120}
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

  const loadInfo = (id: string) => {
    setModalId(id);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setModalId('');
    document.body.style.overflow = 'auto';
  };

  return (
    <footer className="w-full mt-2 bg-white">
      <div className="py-8 text-black bg-white">
        <div className="py-4">
          <div className="box-border min-w-[250px] max-w-6xl mx-auto px-4 flex flex-wrap justify-around gap-6">
            <FooterColumn
              imgUrl="/contentimages/vnsh_money_back_guarantee_footer.webp"
              title="60-Day Money Back Guarantee"
              text="No question asked 60 day refund or replacement guaranteed. If you are unhappy for any reason, get your money back. Rock solid guarantee..."
            />
            <FooterColumn
              imgUrl="/contentimages/vnsh_small_business_footer.webp"
              title="Thank You!"
              text="Your purchase supports the second amendment community and increases our ability to defend ourselves and remain free."
            />
            <FooterColumn
              imgUrl="/contentimages/vnsh_secure_payment_footer.webp"
              title="100% Secure Payment"
              text="All orders are AES-256 Bit encrypted through a HTTPS secure network. We respect your privacy..."
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-center text-black">
            © <b>2025 VNSH.com</b> All Rights Reserved.
          </div>
          <FooterLinks loadInfo={loadInfo} />
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 pt-20" onClick={closeModal}>
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative p-6 mx-auto"
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
