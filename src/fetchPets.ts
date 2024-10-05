// fetchPets.ts

// Определяем типы данных, которые мы ожидаем получить от API
interface Tag {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}

interface Pet {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: string;
}

export async function fetchPets() {
  try {
    const response = await fetch(
      "https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available"
    );

    // Проверяем, успешен ли запрос
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Pet[] = await response.json(); // Используем типизацию данных
    console.log("Полученные данные:", data);

    data.forEach((pet) => {
      console.log(
        `ID: ${pet.id}, Name: ${pet.name}, Category: ${pet.category.name}, Status: ${pet.status}`
      );
    });
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}

