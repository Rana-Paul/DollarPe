import {Stack} from 'expo-router'

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen options={{headerShown: false}} name="OnboardingScreen" />
            <Stack.Screen options={{title: 'DollarPe'}} name="HomeScreen" />
        </Stack>
    )
    
}