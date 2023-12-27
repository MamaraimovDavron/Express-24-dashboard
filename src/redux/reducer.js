const initialState = {
  category: [{ title: "Pizza", completed: false }],
  edit: true,
  display: true,
  addDisplay: false,
  taom: false,
  data: [
    {
      ism: "Davron Mamarayimov",
      taom: "Osh",
      narxi: "20000",
      soni: 2,
      umumiy_narx: 40000,
      telefon_raqam: "+998999374996",
      izoh: "lorem ipsum",
    },
    {
      ism: "Azim Nuriddinov",
      taom: "Manti",
      narxi: "10000",
      soni: 12,
      umumiy_narx: 120000,
      telefon_raqam: "+998999379696",
      izoh: "lorem ipsum",
    },
    {
      ism: "Feruz Toshboyev",
      taom: "Osh",
      narxi: "20000",
      soni: 2,
      umumiy_narx: 40000,
      telefon_raqam: "+998999372103",
      izoh: "lorem ipsum",
    },
    {
      ism: "Ahror Temirxo`jayev",
      taom: "Dimlama",
      narxi: "30000",
      soni: 2,
      umumiy_narx: 60000,
      telefon_raqam: "+998999372663",
      izoh: "lorem ipsum",
    },
    {
      ism: "Alijon Abdujabbarov",
      taom: "Shashlik",
      narxi: "20000",
      soni: 2,
      umumiy_narx: 40000,
      telefon_raqam: "+998999372206",
      izoh: "lorem ipsum",
    },
  ],
  data1: [
    {
      ism: "Davron Mamarayimov",
      taom: "Osh",
      narxi: "20000",
      soni: 2,
      umumiy_narx: 40000,
      telefon_raqam: "+998999374996",
      izoh: "lorem ipsum",
    },
    {
      ism: "Azim Nuriddinov",
      taom: "Manti",
      narxi: "10000",
      soni: 12,
      umumiy_narx: 120000,
      telefon_raqam: "+998999379696",
      izoh: "lorem ipsum",
    },
    {
      ism: "Feruz Toshboyev",
      taom: "Osh",
      narxi: "20000",
      soni: 2,
      umumiy_narx: 40000,
      telefon_raqam: "+998999372103",
      izoh: "lorem ipsum",
    },
    {
      ism: "Ahror Temirxo`jayev",
      taom: "Dimlama",
      narxi: "30000",
      soni: 2,
      umumiy_narx: 60000,
      telefon_raqam: "+998999372663",
      izoh: "lorem ipsum",
    },
    {
      ism: "Alijon Abdujabbarov",
      taom: "Shashlik",
      narxi: "20000",
      soni: 2,
      umumiy_narx: 40000,
      telefon_raqam: "+998999372206",
      izoh: "lorem ipsum",
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  console.log(state);

  switch (action.type) {
    case "EDIT":
      return {
        edit: !state.edit,
      };

    case "SET_DISPLAY":
      return {
        ...state,
        display: !state.display,
      };

    case "ADD_CATEGORY":
      return {
        ...state,
        addDisplay: !state.addDisplay,
      };

    case "ADD_MEAL": {
      return {
        ...state,
        taom: !state.taom,
      };
    }

    case "SET_CATEGORY":
      return {
        ...state,
        category: [
          ...state.category,
          { title: action.payload, completed: false },
        ],
      };

    case "REMOVE_TABLE":
      const data = [...state.data];
      data.splice(action.payload, 1);
      return { ...state, data };

    case "REMOVE_TABLE1":
      const data1 = [...state.data1];
      data1.splice(action.payload, 1);
      return { ...state, data1 };
    default:
      return state;
  }
};

export default reducer;
