export default function SectionAbout() {
    return(
    <section className="py-12 bg-base-200">
        <h3 className="text-3xl font-bold text-center mt-15 mb-10">About Coginifera</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="mr-4">
            <img src={"/sectionleft.jpg"} alt="gambar ilustrasi" className="w-full rounded-lg shadow"/>
        </div>
        {/* Text Section */}
        <div className="selft-start">
            <h2 className="mb-4 text-lg">
                Lahir dari pengalaman mengelola OJS dan resmi berdiri pada 2024, PT Cognifera Education Academy hadir dengan visi membangun ekosistem digital terintegrasi bagi para akademisi. Dengan legalitas remsi dari Puspresnas, kami memadukan standar penerbitan profesional dengan teknologi mutakhir. Kami menyediakan platform yang aman dan transparan untuk mengelola seluruh alur naskah-mulai dari draft hingga mendapatkan ISBN. Di Cognifera, kami mengubah riset menjadi jejak literasi yang abadi.
            </h2>
            <button className="btn btn-neutral rounded-full btn-sm"onClick={(e) => alert('Learn more about Cognifera Publishing')}>Learn More</button>
        </div>

    </div>
    </section>
    )
}