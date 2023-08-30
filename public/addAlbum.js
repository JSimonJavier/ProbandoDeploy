// form para agregar un album 
const objectToSend = { title: "", description: "", yearOfRelease:"", img: ""}

function getInputValues(){
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input)=> objectToSend[input.id]=input.value)
}

const addAlbum = async (e) => {
    e.preventDefault()
    try{
        getInputValues()
        if (!objectToSend.title || !objectToSend.yearOfRelease) {
            throw new Error("Title and Year of Release are required.");
          }
        await axios.post('/band',objectToSend)
        swal({
            title: 'Success!',
            text: 'Album added to the collection!',
            icon: 'success',
            confirmButtonText: 'Ok'
          }) 
        window.location.href='./index.html'

    }
    catch(error){
        swal({
            title: 'Error!',
            text: `${error.response.data}`,
            icon: 'error',
            confirmButtonText: 'Cool'
          })   
    }

}

const button = document.getElementsByClassName('w-1/3 h-10  mt-8 mb-8 text-center text-sm font-bold text-white bg-indigo-500 ring-orange-800  rounded-md hover:bg-opacity-90 focus:ring-4')[0]
button.addEventListener('click', (e) => addAlbum(e))
