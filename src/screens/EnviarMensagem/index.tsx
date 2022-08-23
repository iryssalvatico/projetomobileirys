 
import styles from "./styles";
import { ChatTypes } from "../../types/Screen.types";
import { AxiosError } from "axios";
import { Iresponse } from "../../interfaces/Response.interface"
import { apiMensagem, apiTopico } from "../../services/data"
import { ITopicoState, ITopicoServer } from "../../interfaces/Topico.interface";
import MultiSelect from "react-native-multiple-select";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { IMensagem } from "../../interfaces/Mensagem.interface";
import colors from "../../styles/colors"
import Navigation from "../../navigations";
import { setEnvironmentData } from "worker_threads";
import data_antigo from "../../services/data_antigo";


export default function EnviarMensagem({ navigation }: ChatTypes) {
  const [data, setData] = useSate<Imensagem>();
  const [isLoading, setIsLoading] = useState(true);
  const [topico, setTopico] = useState<ITopicoState[]>([]);
  const [selectedTopico, setSelectedTopico] = useState([]);
  const [startOver, setStartOver] = useState(true);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let camera: Camera;

  const takePicture = async () => {
    if (!camera) return;
    const option = { quality: 0.5, base64: true};
    const photo = await camera.takePictureAsync(option);
    setData({ ...data, imagem: photo});
    setStartOver(true);
  };
  const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync(
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          base64: true,
          aspect: [3, 3],
          quality: 0.5,
      )
  };
  if (!result.cancelled) {
      setData({...data,imagem: result });
  }
};

function handleVoltar(){
    navigation.navigate("Chat");
}
function handleChange(item: IMensagem) {
    setData({ ...data, ...item});
}