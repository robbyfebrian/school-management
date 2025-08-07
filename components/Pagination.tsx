export default async function Pagination() {
    return (
        <div className="flex items-center justify-between text-gray-500">
            <button disabled className="bg-gray-200 py-1 px-3 font-semibold text-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
            <div className="flex items-center gap-2 text-sm">
                <button className="px-3 py-1 rounded-sm bg-blue-300">1</button>
                <button className="px-3 py-1 rounded-sm">2</button>
                <button className="px-3 py-1 rounded-sm">3</button>
                <button className="px-3 py-1 rounded-sm">...</button>
                <button className="px-3 py-1 rounded-sm">10</button>
            </div>
            <button className="bg-blue-300 py-1 px-3 font-semibold text-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
        </div>
    )
}