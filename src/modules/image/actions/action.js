import uid from "uid";

export const addImageItem = () => {
  return {
    type: 'ADD_IMAGE_ITEM',
    payload: {
      id: uid(),
      imageSrc: null
    }
  }
};

export const deleteImageItem = (id) => {
  return {
    type: 'DELETE_IMAGE_ITEM',
    payload: id
  };
};

export const addImage = ({id, imageSrc}) => {
  return {
    type: 'ADD_IMAGE',
    payload: {id, imageSrc}
  };
};


