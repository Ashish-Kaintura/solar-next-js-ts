import Image from "next/image";
import Link from "next/link";

const NewsLetter = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-wrapper">
          <div className="mask-shape">
            <Image
              width={119}
              height={200}
              sizes="100vw"
              src="/img/cta-mask.png"
              alt="shape-img"
            />
          </div>
          <div className="circle-shape">
            <Image
              width={80}
              height={80}
              sizes="100vw"
              src="/img/circle.png"
              alt="shape-img"
            />
          </div>
          <div className="cta-image wow slideUp" data-delay=".3">
            <Image
              width={393}
              height={357}
              sizes="100vw"
              src="/img/cta.png"
              alt="cta-img"
            />
          </div>
          <div className="cta-items">
            <div>
              <h3 className="wow slideUp" data-delay=".5">
                Request Your Free Solar Consultation in Lucknow
              </h3>
              <p className="text-white text-sm mt-1" >
                Are you looking for a trusted solar company in Lucknow? Contact
                Vasudhiv Enterprises for free solar site survey and customized
                solar services according to your needs whether domestic,
                commercial or agricultural.
              </p>
            </div>
            <Link
              href="/contact"
              className="theme-btn bg-white wow slideUp"
              data-delay=".7"
            >
              get A Quote
              <i className="fa-solid fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
