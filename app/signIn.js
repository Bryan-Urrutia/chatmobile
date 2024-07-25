import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Fontisto } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async () => {
    setLoading(true);
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Ingreso", "Por favor ingrese todos los campos!");
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      return;
    }

    //Login Process
  };

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View className="pt-5 px-5 items-center">
        <Image style={styles.image} source={require("../assets/login.png")} />
      </View>
      <View className="px-8">
        <Text style={styles.title} className="tracking-wider text-neutral-800">
          Iniciar Sesión
        </Text>
        <View
          style={{ height: hp(7) }}
          className="flex-row gap-x-4 mt-2 bg-neutral-100 items-center justify-center rounded-2xl"
        >
          <Fontisto name="email" size={hp(2.7)} color={"gray"} />
          <TextInput
            onChange={(value) => (emailRef.current = value)}
            style={{ fontSize: hp(2) }}
            className="flex-1 font-semibold text-neutral-700"
            placeholder="Correo"
            placeholderTextColor={"gray"}
          />
        </View>
        <View>
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-x-4 mt-2 bg-neutral-100 items-center justify-center rounded-2xl"
          >
            <Fontisto name="locked" size={hp(2.7)} color={"gray"} />
            <TextInput
              onChange={(value) => (passwordRef.current = value)}
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Contraseña"
              placeholderTextColor={"gray"}
            />
          </View>
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-right text-neutral-500 mt-2"
          >
            ¿Olvido su contraseña?
          </Text>
        </View>
        <TouchableOpacity
          style={{ height: hp(6.5) }}
          onPress={handleLogin}
          className="bg-green-500 drop-shadow-xl rounded-xl mt-5 justify-center items-center"
        >
          {loading ? (
            <ActivityIndicator size={"large"} color={"white"} />
          ) : (
            <Text
              style={{ fontSize: hp(2.7) }}
              className="text-white font-bold tracking-wider"
            >
              Ingresar
            </Text>
          )}
        </TouchableOpacity>
        <View className="flex-row justify-center mt-5 gap-x-1">
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-neutral-500"
          >
            ¿No tienes una cuenta?
          </Text>
          <Pressable onPress={() => router.push("signUp")}>
            <Text
              style={{ fontSize: hp(1.8) }}
              className="font-semibold text-green-500"
            >
              Registrate
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 350,
    resizeMode: "contain",
    borderRadius: 10,
  },
  title: {
    fontSize: hp(4),
    fontWeight: "bold",
    textAlign: "center",
  },
});
