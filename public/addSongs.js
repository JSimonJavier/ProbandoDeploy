// form para agregar canciones
let album;

const albumId = window.location.search.split('album=')[1]
const getAlbum = async () =>{
  try{
   const {data} = await axios.get(`/band/${albumId}`)
   album = data.data;
  }
  catch(error){
  console.log(error)
  }
}
getAlbum()
const redirect = () => { window.location.href = `./album.html?album=${album._id}`}
const addSong = async (e) => {
    e.preventDefault()
    let newSong = {}
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input)=> newSong[input.id]=input.value)
    if (!newSong.title || !newSong.duration || !newSong.url) {
      swal({
        title: 'Error!',
        text: 'Title, Duration, and URL are required.',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
      return; // Salir de la función si los datos son inválidos
    }

    album.songs.push(newSong)
    try{
     await axios.put(`/band/${album._id}`,album)
     swal({
      title: 'Success!',
      text: "You added a song",
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    redirect()
    }
    catch(error){
      swal({
        title: 'Error!',
        text: `${error}`,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }

}
const goBack = (e)=>{ 
    e.preventDefault()
    redirect()
}
const button = document.getElementsByClassName(' w-1/3 h-10  mt-8 text-center text-sm font-bold text-white bg-indigo-500 ring-orange-800  rounded-md hover:bg-opacity-90 focus:ring-4')[0]
const cancelButton= document.getElementById('cancel')
button.addEventListener('click', (e)=> addSong(e) )
cancelButton.addEventListener('click', (e) => goBack(e))
getAlbum();