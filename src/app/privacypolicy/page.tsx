import PrivacyContent from "@/components/ui/footer/PrivacyContent";
import TermsContent from "@/components/ui/footer/TermsContent";

export default async function PrivacyPage() {

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-3xl font-bold text-black text-center">Privacy Policy</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-black">
                <PrivacyContent />
            </div>
            <hr className="max-w-7xl mx-auto my-6 border-gray-300" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-3xl font-bold text-black text-center">Terms and Conditions</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-black">
                <TermsContent />
            </div>
        </>
    );
}