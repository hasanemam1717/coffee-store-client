import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffe,setCoffees,coffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photoUrl } =
    coffe;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaing = coffees.filter(cof =>cof._id !== id);
              setCoffees(remaing)
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photoUrl} alt="Coffee img is missing" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {name}</h2>
          <p>Details : {details}</p>
          <p>Quantity : {quantity}</p>
          <p>Category : {category}</p>
          <p>Taste : {taste}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View</button>
            <Link to={`/updateCoffe/${_id}`}>
              <button className="btn btn-primary bg-orange-500">Update</button>
            </Link>
            <button
              className="btn btn-primary bg-red-600"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
