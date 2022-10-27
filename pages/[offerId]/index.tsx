import { useRouter } from "next/router";
import OfferLayout from "../../components/OfferLayout";
import { IOffer } from "../../types";
import connectToMongoDB from "../../utils/mongoDB";
import offer from "../../models/offer";
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext } from "next";

function Offer(offer: IOffer) {
    return <OfferLayout {...offer} />;
}

export const getStaticPaths = () => {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    offerId: "1",
                },
            },
        ],
    };
};

export async function getStaticProps(context: GetStaticPropsContext) {
    try {
        const { params } = context;
        const offerId = params!.offerId;

        await connectToMongoDB();
        const doc = JSON.parse(
            JSON.stringify(await offer.findById(offerId).exec())
        );

        return {
            props: { ...doc },
        };
    } catch (err) {
        return {
            notFound: true
        }
    }
}

export default Offer;
