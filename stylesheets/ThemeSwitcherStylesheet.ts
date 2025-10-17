import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',       
        top: 15,                    
        right: 10,                  
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 25,           
        flexDirection: 'row',       
        alignItems: 'center',
        zIndex: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
     text: {
    fontSize: 12,            
    marginRight: 4,
    fontWeight: '600',
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], 
  },
})

export default styles