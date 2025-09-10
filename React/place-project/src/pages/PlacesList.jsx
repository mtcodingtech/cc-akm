import Button from "../components/Button";
import { Cable, CalendarArrowDownIcon } from "lucide-react";
import Heading from "../components/Heading";

function PlacesList() {
  return (
    <div>
      <Heading title="Places" />
      <Button
        text="Hello"
        startIcon={<CalendarArrowDownIcon size="20" />}
        endIcon={<Cable size="20" />}
        customStyles={"bg-sky-500"}
      ></Button>
    </div>
  );
}

export default PlacesList;
