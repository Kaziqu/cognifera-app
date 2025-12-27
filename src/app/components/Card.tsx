export default function Card(props: Record<string, unknown>) {
    return(
     <section className="py-8 bg-base-200">
        <h3 className="text-4xl mt-8 font-bold text-center mb-8 ">Service Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mt-15">
            <div className="bg-gradient-to-r from-gray-400 rounded-lg font-semibold shadow p-10 min-h-[250px] hover:shadow-lg hover:scale-105 transition-transform duration-300"><h3 className="text-xl font-bold mb-4 text-gray-900">Book Publishing🔖</h3>
            <p className="text-lg">Upload, Review, ISBN, hingga Terbit</p>
            </div>
            <div className="bg-gradient-to-r from-gray-500 rounded-lg font-semibold shadow-200px p-10 min-h-[250px] hover:shadow-lg hover:scale-105 transition-transform duration-300"><h3 className="text-xl font-bold mb-4 text-gray-200">Research Consultant🔍</h3>
            <p className="text-lg">Pendampingan riset berukualitas</p></div>
            <div className="bg-gradient-to-r from-gray-600 rounded-lg font-semibold shadow p-10 min-h-[250px] hover:shadow-lg hover:scale-105 transition-transform duration-300"><h3 className="text-xl font-bold mb-4 text-gray-200">OJS Management📌</h3>
            <p className="text-lg">Pengelolaan sistem jurnal Digital</p></div>
        </div>
     </section>
    )
}