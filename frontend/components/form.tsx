function Form() {
  const handleSubmit = (e: any) => {
    e.preventDefault()

    console.log("Submitted");
  }

  return <form className="flex space-x-2" onSubmit={handleSubmit}>
    <input type="text" name="message" placeholder="Enter a message" className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />

    <button type="submit" className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Send
    </button>
  </form>
}

export default Form
