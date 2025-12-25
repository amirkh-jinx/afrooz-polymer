import './index.css'


function App() {

  return (
    <>

    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-950 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Tailwind فعال شد 🎉
        </h1>

        <p className="text-gray-500 mb-6">
          این یه کارت رندوم با تیلوینده
        </p>

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
          کلیک کن
        </button>
      </div>
    </div>
    </>
  )
}

export default App
