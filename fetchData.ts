async function fetchPets() {
  try {
    const response = await fetch(
      "https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available"
    );
    const data = await response.json();
    console.log("Полученные данные:", data);

    // Обработка данных
    data.forEach((pet: any) => {
      console.log(
        `ID: ${pet.id}, Name: ${pet.name}, Category: ${pet.category.name}, Status: ${pet.status}`
      );
    });
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}

fetchPets();
