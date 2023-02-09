import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loading from "../components/Loading"
import ProductCard from "../components/ProductCard"
import { fetchProductAsync } from "../store/actions/productActions"
import { getError, getLoading, getProducts } from "../store/selectors/productSelector"

export const Products = () => {

  const [filteredProducts, setFilteredProducts] = useState([])

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("Tout")
  const dispatch = useDispatch()

  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const products = useSelector(getProducts);


  const resetFilter = () => {
    setSearch("")
    setCategory("Tout")
  }



 
  useEffect(() => {
    dispatch(fetchProductAsync())
   }, [])

   useEffect(() => {
     let result;
     // checker la categorie
     if(category != "Tout" ) {
       result = products.filter((product) => {
         return (
          product.category === category && (
            product.title.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase()))
         )
       })

     }else {
      result = products.filter((product) => {
        return (
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
        )
      })
     }
     
     setFilteredProducts(result)

   }, [products, search, category])

    return (

        // La barre comparera avec le titre et la description
        // Le select pour la catégorie
        // les filtre sont cumulables 
        // Afficher un bouton pour effacer les filtres seulement quand
        // ils sont remplis
        <main className="my-10 container mx-auto">
          {/* DESCRIPTION */}
          <div>
            <h3 className="text-2xl font-bold">Faites votre choix</h3>
            <p>Profiter des meilleurs avants ruptures</p>
          </div>
            {/* FORMULAIRE */}
            <div className="my-4 flex gap-6">
              <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="py-2 px-6 leading-none bg-gray-900 text-slate-100  focus:outline-none focus:border-pink-700  border-b-2 border-pink-50"
              placeholder="Clavier Razer..." 
              type="search"  />
              <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
               className="py-2 px-6 bg-gray-900 text-slate-100"
               name="cat"
                id="cat" 
               >
                 <option 
                 value="Tout">Tout</option>
                        <option value="Souris">Souris</option>
                        <option value="Jeux video">Jeux video</option>
                        <option value="Ordinateur">Ordinateur</option>
                        <option value="VR">VR</option>
                        <option value="Casque">Casque</option>
                        <option value="Ecran">Ecran</option>
                        <option value="Clavier">Clavier</option> 

              </select>

              {search.length > 1 && 
              <button
              onClick={resetFilter}
              className="font-bold text-2xl text-pink-700">X</button>
          }

            </div>

             {/* RESULTAT */}
             <div>
               <p>Résultat : <span>{filteredProducts.length}</span></p>
             </div>

              {/* LISTE DES PRODUITS */}
              <div className="mt-10 mb-20 gap-7 sm:grid md:grid-cols-2 xl:grid-cols-4">
            { products.length && !error ? filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
            )) :
                <div className="flex justify-center">
                 <p className="bg-red-400 p-3">{error}</p> 
                </div>
            
             }

            {loading && <Loading />}

            </div>


        </main>

      
    )
  }
  