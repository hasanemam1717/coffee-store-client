import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCOffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photoUrl } =
    coffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };
    console.log(updatedCoffee);
    fetch(`http://localhost:5000/coffee/${_id}`,{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(updatedCoffee)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data);
        if(data?.modifiedCount){
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Updated coffee successfully.",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  };
  return (
    <div>
        <h1 className="text-3xl font-bold">Update Coffee</h1>
      <form onSubmit={handleUpdateCoffee} className="bg-slate-500 p-4">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  text-black">
          {/* name and quantity row */}
          <div className="grid grid-cols-6 gap-4 col-span-full ">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Coffee Name" className="text-xl  ">
                Coffee Name
              </label>
              <input
                name="name"
                defaultValue={name}
                type="text"
                placeholder="Coffee Name"
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Available Quantity" className="text-xl ">
                Available Quantity
              </label>
              <input
                id=""
                defaultValue={quantity}
                name="quantity"
                type="number"
                placeholder="Available Quantity"
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
          </div>{" "}
          {/* supplier and taste */}
          <div className="grid grid-cols-6 gap-4 col-span-full ">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Coffee Name" className="text-xl ">
                Supplier
              </label>
              <input
                name="supplier"
                defaultValue={supplier}
                type="text"
                placeholder="Supplier"
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Available Quantity" className="text-xl ">
                Taste
              </label>
              <input
                id=""
                defaultValue={taste}
                name="taste"
                type="text"
                placeholder="Taste"
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
          </div>{" "}
          {/* category and details */}
          <div className="grid grid-cols-6 gap-4 col-span-full ">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Coffee Name" className="text-xl ">
                Category
              </label>
              <input
                name="category"
                defaultValue={category}
                type="text"
                placeholder="Category"
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Available Quantity" className="text-xl ">
                Details
              </label>
              <input
                id=""
                defaultValue={details}
                name="details"
                type="text"
                placeholder="Details"
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
          </div>{" "}
          <div className="grid  gap-4 col-span-full ">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Coffee Name" className="text-xl ">
                Photo URL
              </label>
              <input
                name="photo"
                defaultValue={photoUrl}
                type="text"
                placeholder="Photo URL"
                className="w-full p-4 rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
          </div>
        </fieldset>
        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block bg-blue-200"
        />
      </form>
    </div>
  );
};

export default UpdateCOffee;
