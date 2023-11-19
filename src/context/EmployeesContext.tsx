import {
  ChangeEvent,
  createContext,
  FormEvent,
  JSX,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../Hooks/useDebounce";

type EmployeeType = {
  id?: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  address: string;
  city: string;
  postalCode: string;
  salary: number;
  status: string;
  phone: string;
};

type EmployeesContextProps = {
  employeesList: EmployeeType[];
  newEmployeeInput: EmployeeType;
  employee: EmployeeType;
  isEditable: boolean;
  allowDelete: boolean;
  handleNewEmployeeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewEmployeeSubmit: (event: FormEvent<HTMLFormElement>) => void;
  getSingleEmployee: (id: string) => Promise<any>;
  handleEditEmployeeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEditEmployee: (event: FormEvent<HTMLFormElement>) => void;
  toggleEditing: (id: string) => void;
  setAllowDelete: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => void;
  handleSearchInput: (event: ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
};

type EmployeesProviderProps = {
  children: JSX.Element;
};

const URL = "http://localhost:5000";

export const EmployeesContext = createContext<EmployeesContextProps>(
  {} as EmployeesContextProps
);

export const EmployeesProvider = ({ children }: EmployeesProviderProps) => {
  const [employeesList, setEmployeesList] = useState<EmployeeType[]>([]);
  const [newEmployeeInput, setNewEmployeeInput] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    address: "",
    city: "",
    postalCode: "",
    salary: 0,
    status: "",
    phone: "",
  });
  const [employee, setEmployee] = useState({} as EmployeeType);
  const [isEditable, setIsEditable] = useState(false);
  const [allowDelete, setAllowDelete] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchValue = useDebounce(searchTerm, 500);
  const navigate = useNavigate();

  // wprowadzamy funkcję do pobrania danych
  const getEmployees = async () => {
    const searchURL = searchValue.length > 0 ? `q=${searchValue}` : "";
    try {
      const response = await fetch(`${URL}/employees?${searchURL}`);

      if (!response.ok)
        throw new Error("Somethnig went wrong while fetching Employees");

      const data = await response.json();

      setEmployeesList(data);
      return data;
    } catch (error) {
      throw new Error();
    }
  };

  const getSingleEmployee = async (id: string) => {
    try {
      const response = await fetch(`${URL}/employees/${id}`);

      if (!response.ok)
        throw new Error("Somethnig went wrong while fetching Employee");

      const data = await response.json();

      setEmployee(data);
      return data;
    } catch (error) {
      throw new Error();
    }
  };

  const addEmployee = async (newEmployee: EmployeeType) => {
    const {
      firstName,
      lastName,
      birthDate,
      address,
      city,
      postalCode,
      salary,
      status,
      phone,
    } = newEmployee;

    try {
      const response = await fetch(`${URL}/employees`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          birthDate,
          address,
          city,
          postalCode,
          salary,
          status,
          phone,
        }),
      });

      if (!response.ok)
        throw new Error("Something went wrong while adding new employee");

      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  const editEmployee = async () => {
    try {
      const response = await fetch(`${URL}/employees/${employee.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...employee,
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      return error;
    }

    setIsEditable(false);
  };

  const deleteEmployee = async () => {
    try {
      const response = await fetch(`${URL}/employees/${employee.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      return error;
    }
  };

  const handleNewEmployeeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewEmployeeInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEditEmployeeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setEmployee((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleNewEmployeeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      newEmployeeInput.firstName.length < 2 ||
      newEmployeeInput.lastName.length < 2 ||
      newEmployeeInput.address.length < 2 ||
      newEmployeeInput.city.length < 2 ||
      newEmployeeInput.postalCode.length < 6 ||
      newEmployeeInput.salary < 2000 ||
      newEmployeeInput.status === "" ||
      newEmployeeInput.phone.length < 9
    ) {
      alert("Wypełnij pola prawidłowo");
    }

    const newEmployee = {
      firstName: newEmployeeInput.firstName,
      lastName: newEmployeeInput.lastName,
      birthDate: newEmployeeInput.birthDate,
      address: newEmployeeInput.address,
      city: newEmployeeInput.city,
      postalCode: newEmployeeInput.postalCode,
      salary: newEmployeeInput.salary,
      status: newEmployeeInput.status,
      phone: newEmployeeInput.phone,
    };

    const employee = addEmployee(newEmployee);

    if (typeof employee === "object") getEmployees();
  };

  const handleEditEmployee = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    editEmployee();
  };

  const handleDelete = async () => {
    await deleteEmployee();

    setAllowDelete(false);
    await getEmployees();
    navigate("/employees");
  };

  const toggleEditing = (id: string) => {
    if (isEditable && id) getSingleEmployee(id);
    setIsEditable((prev) => !prev);
  };

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getEmployees();
  }, [searchValue]);

  return (
    <EmployeesContext.Provider
      value={{
        employeesList,
        newEmployeeInput,
        employee,
        isEditable,
        allowDelete,
        handleNewEmployeeInput,
        handleNewEmployeeSubmit,
        getSingleEmployee,
        handleEditEmployeeInput,
        handleEditEmployee,
        toggleEditing,
        setAllowDelete,
        handleDelete,
        handleSearchInput,
        searchTerm,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};
