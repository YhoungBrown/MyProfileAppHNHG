import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',       
        top: 15,                    
        right: 10,                  
        paddingHorizontal: 7,
        paddingVertical: -1,
        borderRadius: 25,           
        flexDirection: 'row',       
        alignItems: 'center',
        zIndex: 10  
    },
     text: {
    fontSize: 12,            
    marginRight: -1
  },
  switch: {
    transform: [{ scaleX: 1 }, { scaleY: 1 }], 
    marginRight: -7
  },
})

export default styles