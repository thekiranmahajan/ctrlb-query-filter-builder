# Query Filter Builder

This project is a Query Filter Builder UI built using React, Vite, Tailwind CSS, and FontAwesome. It allows users to create and manage query filters by selecting attributes, operations, and values. Users can interact with the UI through mouse clicks or keyboard navigation (arrow keys).

## Features

- **Attribute Selection**: Users can select an attribute from a dropdown list.
- **Operation Selection**: After selecting an attribute, users can select an operation from a dropdown list.
- **Value Input**: Users can input a specific value for the selected attribute and operation.
- **Triplet Display**: Selected queries are displayed as triplets (attribute-operation-value) with the ability to remove any triplet.
- **Keyboard Navigation**: Users can navigate through dropdown options using up and down arrow keys.
- **Dropdown Toggle**: Dropdown can be toggled by clicking the input field or the magnifying glass icon.

## Preview

![image](https://github.com/thekiranmahajan/ctrlb-query-filter-builder/assets/91893931/4c4b2720-a5b9-4fca-aade-40d4fca20d24)

## Live Demo

https://ctrlb-query-filter-builder.vercel.app/

## Additional Functionalities

- **Arrow Key Navigation**: Users can navigate dropdown options using up and down arrow keys.
- **Input Focus**: The input field focuses automatically when required.
- **Dynamic Dropdown Options**: Options are filtered based on the current step (attribute, operation, or value).

## Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **FontAwesome**

## Setup Instructions

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/thekiranmahajan/ctrlb-query-filter-builder
   cd ./ctrlb-query-filter-builder
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```plaintext
   http://localhost:5173
   ```

## Folder Structure

```
CTRLB-QUERY-FILTER-BUILDER
├── node_modules/
├── src/
│   ├── components/
│   │   ├── Dropdown.jsx
│   │   ├── index.js
│   │   ├── SearchBar.jsx
│   │   ├── TripletFilter.jsx
│   ├── utils/
│   │   ├── constants.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
```

## Usage

1. **Select Attribute**: Click on the input field and select an attribute from the dropdown list.
2. **Select Operation**: After selecting an attribute, choose an operation from the dropdown list.
3. **Input Value**: Type a value for the selected attribute and operation.
4. **Add Query**: Press "Enter" to add the query as a triplet. Repeat the process to add more queries.
5. **Remove Query**: Click the cross icon next to any triplet to remove it.

## Conclusion

This Query Filter Builder UI provides a user-friendly interface to create and manage query filters. It includes keyboard navigation and dynamic dropdown options for an enhanced user experience. Despite a few known bugs, it offers a robust solution for log management systems.
