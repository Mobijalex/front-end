import { Button, Modal } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

const BookingModal = ({ opened, setOpened, propertyId, email }) => {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="select your date of visit"
      centered
    >
      <div className="flexColCenter">
        <DatePicker />
        <Button>BookVisit</Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
