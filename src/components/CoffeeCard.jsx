import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee ,setCoffees, coffees }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee;

 
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        console.log(data.deletedCount)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )

                            const remaining = coffees.filter(coff => coff._id !==_id )
                            setCoffees(remaining)
                          
                        }
                    })

            }
        })
    }

    return(
        <div className="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-row">
            <figure className="w-full lg:w-1/3">
                <img src={photo} alt="Coffee" className="object-cover w-full h-full" />
            </figure>
            <div className="flex flex-col lg:flex-row justify-center  p-4 lg:pr-4 items-stretch flex-wrap content-around w-full">
                <div className="w-full lg:w-2/3">
                    <h2 className="card-title text-xl lg:text-2xl">Name: {name}</h2>
                    <p className="text-sm lg:text-base">Quantity: {quantity}</p>
                    <p className="text-sm lg:text-base">Supplier: {supplier}</p>
                    <p className="text-sm lg:text-base">Taste: {taste}</p>
                </div>
                <div className="card-actions flex flex-row lg:flex-col
                  lg:justify-end space-y-2 lg:space-y-0 lg:space-x-2 mt-4 lg:mt-0">
                    <button className="btn btn-primary lg:ml-2 mt-2">View</button>
                    <Link to={`updateCoffee/${_id}`}> <button className="btn btn-secondary">Edit</button></Link>
                    
                    <button className="btn btn-danger bg-orange-500 o" onClick={()=>handleDelete(_id)}>X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
