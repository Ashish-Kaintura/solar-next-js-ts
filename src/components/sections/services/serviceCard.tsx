import { ServiceDataType } from "@/db/serviceOneData";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({
  service,
  className,
}: {
  service: ServiceDataType;
  className?: string;
}) => {
  return (
    <div className={`service-box-items ${className}`}>
      <div className="icon">
        <Image width={45} height={45} src={service.icon} alt={service.title} />
      </div>
      <div className="content">
        <h4>
          <Link href={`/services/${service.id}`}>{service.title}</Link>
        </h4>
        <p>{service.description}</p>
        <Link href={`/service/${service.id}`} className="theme-btn-2 mt-3">
          Read More
          <i className="fa-solid fa-arrow-right-long" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
