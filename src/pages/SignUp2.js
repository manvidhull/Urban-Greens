
function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [val, setVal] = useState('');

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
        navigate('/buyerhome');
      } else {
        alert("Wallet connection denied by user!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    // Wallet connection logic...
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setVal(data.user.email);
    });
  };

  const handleSubmission = () => {
    // Signup submission logic...
  };

  return (
    <>
      <div className={styles.container}>
        <div className="left">
          <div className={styles.innerBox}>
            {/* Signup form inputs */}
            <div style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Wallet connection button */}
              <button onClick={currentAccount ? undefined : connectWallet} style={{ marginTop: '10px' }}>
                {currentAccount ? (
                  <span className="text-black-500">{currentAccount}</span>
                ) : (
                  <div>
                    <div id="signupButton" style={{ color: 'white', backgroundColor: '#075F07', marginLeft: '2px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 'auto', padding: '2px 5px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', borderRadius: '10px' }} onClick={connectWallet}>
                      Connect Wallet <img style={{ width: '40px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" alt="MetaMask" />
                    </div>
                  </div>
                )}
              </button>
            </div>
            {/* Signup form footer */}
          </div>
        </div>
        <div className="right">
          <img alt="card img" style={{ width: '530px', height: '660px', borderRadius: '0 20px 20px 0', float: 'right', transitionDuration: '1000ms', paddingTop: '1px' }} src={heroImg} />
        </div>
      </div>
    </>
  );
}

export default Signup;

