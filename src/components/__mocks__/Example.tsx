import { View, Text } from "react-native"

export const Example = function(){
    return (
        <View testID='example-component'>
            <Text testID='example-component-text'>This is an example of a component mock</Text>
        </View>
    )
}