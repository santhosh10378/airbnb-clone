import { useModal } from "../../context/ModalContext";
import CustomButton from "../elements/CustomButton";

const body = (
  <div className="flex flex-col gap-5 mt-2 p-3">
    <h2 className="font-bold">About this place</h2>

    <div className="">
      {`
      A one-of-its-kind boutique Hotel just outside the scintillating town of Manali, we are the perfect blend of comfort and luxury. Born out of a passion, Godwin and I, put in a lot of love and effort into making your experience wholesome and unique. From the offbeat motorcycle themed cafe to a top notch haircut, we’ve got it all covered. Our hotel is the fruit of our labour and every time you stay or eat with us, or even recommend us, you tell us that we’re doing something right!

      The space
      Designed to enhance comfort & the feeling of personal space – the exteriors of the resort have been inspired by old Himachali Kathkuni architecture. The attention to every little detail – be it design, layout, furniture or lighting – is evident as soon as one steps into the resort. The interiors are classic but the hotel provides all the modern amenities one expects. Open spaces have been landscaped into lush, green gardens that are laden with flowers. A designated bonfire area is present to keep you warm on cold nights.

      Nestled amidst apple, apricot & cherry orchards, with a stunning 360 degree view of snow capped mountains and the Beas river flowing right beside it.

      The Space

      Rooms:
The most basic rooms on the property, standard rooms still come plushly furnished in Ride Inn style. Standard rooms are simple and modern with views of orchards & mountains. If you’re looking for a basic room that comes equipped with modern facilities, the Standard rooms will cover your needs.

*The rooms are equipped with TV, Water kettle and tea/coffee amenities.
*Free 100 mbps broadband Wifi is available in all bedrooms and common spaces.
*Fresh linen and cleaning is provided in all rooms.
*Laundry is provided at an additional cost.
*Heaters in room at an extra cost. Please enquire with our staff at the property.
*Purified drinking water is provided in rooms.
* We provide electric heating blankets during winters ONLY FOR DOUBLE OCCUPANCY at no additional cost.
There will be no electric blanket provided in case of a third occupant.
*Each rooms has an attached bathroom.
*All bathrooms have modern fixtures and are equipped with hot water supply.
*Essentials such as towels and basic toiletries are provided in all bathrooms.
*Generator power back up.

Cafe:
The roof-top cafe serves as the melting pot for guests from different parts of the world. It is the perfect place to relax, recharge, revive and reach out to other fellow travellers over a comprehensive menu for varied palates. As a Chef, I strongly believes that food is a very important part of travel and your travel experience in Manali will not be complete if you do not sample the food at our restaurant. We use the freshest of ingredients and incorporate rare local ingredients to create a fusion of cuisines. Ride Inn Cafe offers a fusion of Indian, Chinese, Italian, Thai & local Himachali cuisine.
We have a library of books, board games & musical instruments. Besides the delicious food, another great reason to dine at our cafe is to have the unique experience of dining on tables and chairs fabricated out of old motorcycle parts. We give a lot of attention to detail when it comes to food, decor & ambience.


Salon:
While you are staying with us and enjoying the food the cafe, step into our luxury salon and experience a customized hair service all this while you enjoy some of the best views of the Himalayas.
Sneh and I are masters in the hairdressing industry, having a combined experience of over two decades spread over three continents & have trained and worked for major brands like Rossano Ferretti, Vidal Sasoon, Toni & Guy, Nalini & Yasmin, L’Oreal Professionel & Kerastase.
Hair services offered include hair cuts, hair colour, shampoo & styling. The salon is open by appointment only!
      `}
    </div>
  </div>
);

const ListingDescription = () => {
  const { openModal, setModalContent } = useModal();

  return (
    <div className="flex flex-col gap-2">
      <h2>About this place</h2>

      <div className="line-clamp-5">
        Welcome to Orchard Farm, a stunning family-friendly and pet-friendly
        luxury farmhouse just 45 minutes from Delhi and Gurgaon, this farmhouse
        offers a tranquil escape for you and your loved ones with exclusive
        amenities like a private pool and Jacuzzi. It is a perfect place for
        getaways near Delhi and Gurgoan with friends and family and also an
        ideal choice for pre-wedding shoots, corporate events, destination
        weddings and parties. Welcome to Orchard Farm, a stunning
        family-friendly and pet-friendly luxury farmhouse just 45 minutes from
        Delhi and Gurgaon, this farmhouse offers a tranquil escape for you and
        your loved ones with exclusive amenities like a private pool and
        Jacuzzi. It is a perfect place for getaways near Delhi and Gurgoan with
        friends and family and also an ideal choice for pre-wedding shoots,
        corporate events, destination weddings and parties.
      </div>

      <CustomButton
        onClick={() => {
          openModal("DescriptionModal");
          setModalContent(body);
        }}
        variant="secondary-link"
      >
        Show more
      </CustomButton>
    </div>
  );
};

export default ListingDescription;
