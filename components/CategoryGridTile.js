import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

function CategoryGridTile({title, color, onPress}){
    return (
    <View style={styles.gridItem}>
        <Pressable style={({pressed})=>[styles.button, pressed ? styles.buttonPressed: null]} 
        android_ripple={{color: "#ccc"}} 
        onPress={onPress}>
            <View style={[styles.innerContainer, 
                {backgroundColor: color}]}>
                <Text style={styles.title}> 
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>
    )
}

export default CategoryGridTile;
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        // marginTop: 30,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        // for IOS only
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        // for IOS only
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer:  {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        borderRadius: 8,
        alignItems: "center"
    },
    button: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,

    }
})