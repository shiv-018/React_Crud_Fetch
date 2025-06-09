import { useEffect, useState } from "react";

function Stud() {


    const [students, setStudents] = useState({ name: "", email: "", password: "" });
    let [data, setdata] = useState([])
    // let [user, setStudents] = useState(null)

    let handleinput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setStudents(values => ({ ...values, [name]: value }))
    }

    // save the students data

    let handleSubmit = async (e) => {
        e.preventDefault();

        let res = await fetch("http://127.0.0.1:2001/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(students)
        });
        if (res.ok) {
            let students = await res.json()
            // setStudents = { name: "", email:"", password: ""}
            setStudents({ name: "", email: "", password: "" });
            fetchStudents()
        } else {
            alert("Someting wrong")
        }

    }

    // Show the all students

    let fetchStudents = async () => {
        let res = await fetch("http://127.0.0.1:2001/", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        });
        if (res.ok) {
            let data = await res.json()
            setdata(data)
        } else {
            alert("Failed to Students")
        }
    }
    useEffect(() => {
        fetchStudents()
    }, [])

    //   Delete Students

    let studentdelete = async (id) => {
        let res = await fetch(`http://127.0.0.1:2001/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },

        });
        if (res.ok) {
            let students = await res.json()

            setStudents({ name: "", email: "", password: "" });
            fetchStudents()
        } else {
            alert("Someting wrong")
        }

    }

    //Update Students


    let studentUpdate = async (_id, updatedStudent) => {
        let res = await fetch(`http://127.0.0.1:2001/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedStudent)


        });

        if (res.ok) {
            await res.json();
            fetchStudents();
            setStudents({ name: "", email: "", password: "" });

        } else {
            alert("Something went wrong");
        }
    };

    const editstudent = (s) => {
        setStudents({
            id: s._id || s._id,
            name: s.name,
            email: s.email,
            password: s.password
        });
    };

    return (

        <div className="container mt-5">
            <div className="card p-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            name="name"
                            value={students.name}
                            onChange={handleinput}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={students.email}
                            onChange={handleinput}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={students.password}
                            onChange={handleinput}
                        />
                    </div>

                    <div className="mb-3 d-flex gap-2">
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => studentUpdate(students.id, students)}
                        >
                            Update
                        </button>
                    </div>
                </form>

                <h2 className="mt-5">All Students</h2>

                <table className="table table-bordered table-striped mt-3">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((s, index) => (
                            <tr key={index}>
                                <td>{s.name}</td>
                                <td>{s.email}</td>
                                <td>{s.password}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-info me-2"
                                        onClick={() => editstudent(s)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => studentdelete(s._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Stud