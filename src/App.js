import React from 'react'
import Navigation from './Navigation'
import 'bulma/css/bulma.min.css';
import './App.scss';
import ThemeMode from './ThemeChanger';
import './stylesheet.scss';
import {Columns, Content, Heading} from "react-bulma-components";

function drawMiddleLine() {
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	const width = canvas.width = window.innerWidth;
	const height = canvas.height = window.innerHeight;
}

const App = () => {
		return <div className="App">
		<ThemeMode/>
				<Columns>
					<Columns.Column narrow="true" id="navigationMenu">
						<Navigation/>
					</Columns.Column>
					<Columns.Column id="prosSide" class="column content">
						<Content>
							<Heading>
								Test 12345
							</Heading>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis eros faucibus tortor venenatis sodales. Nam dignissim est a arcu molestie tempor. Sed ut neque et mauris rutrum luctus. Aliquam blandit lacus at ultrices varius. Aenean vehicula libero sem, ut vulputate nibh consectetur ut. Ut dictum nunc sed felis blandit, vitae malesuada urna sollicitudin. Morbi purus arcu, gravida in iaculis at, convallis congue lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis malesuada placerat lectus, sed feugiat arcu ultricies ac. Cras et pellentesque quam. Etiam tempus vitae ante sit amet faucibus. Nunc porta, nisi nec eleifend feugiat, libero purus commodo nisi, aliquet hendrerit ante lacus eget libero. Phasellus sed vulputate mauris, sed lobortis arcu. Duis sed arcu in nibh porttitor malesuada.

								Proin et magna non nunc fermentum consectetur. Praesent facilisis orci nec erat tincidunt, a imperdiet sem blandit. Nulla id tempor diam. Integer eu suscipit purus, id faucibus odio. Donec in pharetra lectus. Sed sem odio, malesuada quis ligula et, dapibus scelerisque turpis. Aliquam eu nulla libero. Nullam metus nibh, facilisis non justo tincidunt, mollis sagittis libero. Mauris eget nisi non augue finibus suscipit. Nulla aliquet ex eget tempor euismod.

								Suspendisse potenti. Etiam posuere, quam ac consectetur malesuada, neque elit venenatis dui, vitae vestibulum mauris turpis eu mauris. Donec et lorem massa. Ut erat est, dictum sit amet urna non, iaculis rutrum justo. Curabitur auctor auctor dapibus. Phasellus ligula libero, imperdiet ac imperdiet vitae, tincidunt at nulla. Aliquam dapibus, leo at fringilla mollis, quam nunc porta erat, id ullamcorper mauris metus nec turpis. Proin risus tortor, ornare non odio quis, bibendum lobortis arcu. Aliquam vel venenatis sapien, eget efficitur massa. Morbi commodo placerat leo, et tempus ante tincidunt ut. Morbi pharetra vulputate sapien id sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque mattis ac purus nec hendrerit. Morbi nec justo nec orci efficitur venenatis. Curabitur a eros facilisis tellus elementum pharetra eleifend et libero. Proin cursus, lacus at pulvinar commodo, nunc dolor vehicula dui, ac rhoncus magna libero et mauris.

								Pellentesque sit amet elit eu quam sodales maximus et non mauris. Cras in arcu nisl. Nam quis bibendum justo. Curabitur congue vel ex in posuere. Fusce sit amet tellus non orci sagittis tristique id nec leo. Cras rutrum semper magna lobortis sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam maximus, nunc a suscipit vulputate, arcu velit bibendum arcu, vel auctor justo nisl quis ante. Donec dictum rhoncus quam ac ultrices. Sed ex nulla, viverra eleifend ipsum ut, ullamcorper faucibus nisl. Aliquam posuere nisi purus, non tempus ligula eleifend id. Proin sit amet tincidunt mauris, sed lobortis justo. Maecenas id leo eu erat fermentum egestas a sit amet justo. Aenean gravida maximus nunc. Sed luctus aliquam posuere. Mauris sem magna, congue ac tincidunt ut, suscipit in odio.

								Fusce facilisis magna a erat auctor sagittis. Aliq
							</p>
						</Content>
					</Columns.Column>
					<Columns.Column narrow="true" alignItems="center">

					</Columns.Column>
					<Columns.Column id="consSide" class="column content has-text-right">
						<Heading>
							Test 12345
						</Heading>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis eros faucibus tortor venenatis sodales. Nam dignissim est a arcu molestie tempor. Sed ut neque et mauris rutrum luctus. Aliquam blandit lacus at ultrices varius. Aenean vehicula libero sem, ut vulputate nibh consectetur ut. Ut dictum nunc sed felis blandit, vitae malesuada urna sollicitudin. Morbi purus arcu, gravida in iaculis at, convallis congue lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis malesuada placerat lectus, sed feugiat arcu ultricies ac. Cras et pellentesque quam. Etiam tempus vitae ante sit amet faucibus. Nunc porta, nisi nec eleifend feugiat, libero purus commodo nisi, aliquet hendrerit ante lacus eget libero. Phasellus sed vulputate mauris, sed lobortis arcu. Duis sed arcu in nibh porttitor malesuada.

							Proin et magna non nunc fermentum consectetur. Praesent facilisis orci nec erat tincidunt, a imperdiet sem blandit. Nulla id tempor diam. Integer eu suscipit purus, id faucibus odio. Donec in pharetra lectus. Sed sem odio, malesuada quis ligula et, dapibus scelerisque turpis. Aliquam eu nulla libero. Nullam metus nibh, facilisis non justo tincidunt, mollis sagittis libero. Mauris eget nisi non augue finibus suscipit. Nulla aliquet ex eget tempor euismod.

							Suspendisse potenti. Etiam posuere, quam ac consectetur malesuada, neque elit venenatis dui, vitae vestibulum mauris turpis eu mauris. Donec et lorem massa. Ut erat est, dictum sit amet urna non, iaculis rutrum justo. Curabitur auctor auctor dapibus. Phasellus ligula libero, imperdiet ac imperdiet vitae, tincidunt at nulla. Aliquam dapibus, leo at fringilla mollis, quam nunc porta erat, id ullamcorper mauris metus nec turpis. Proin risus tortor, ornare non odio quis, bibendum lobortis arcu. Aliquam vel venenatis sapien, eget efficitur massa. Morbi commodo placerat leo, et tempus ante tincidunt ut. Morbi pharetra vulputate sapien id sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque mattis ac purus nec hendrerit. Morbi nec justo nec orci efficitur venenatis. Curabitur a eros facilisis tellus elementum pharetra eleifend et libero. Proin cursus, lacus at pulvinar commodo, nunc dolor vehicula dui, ac rhoncus magna libero et mauris.

							Pellentesque sit amet elit eu quam sodales maximus et non mauris. Cras in arcu nisl. Nam quis bibendum justo. Curabitur congue vel ex in posuere. Fusce sit amet tellus non orci sagittis tristique id nec leo. Cras rutrum semper magna lobortis sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam maximus, nunc a suscipit vulputate, arcu velit bibendum arcu, vel auctor justo nisl quis ante. Donec dictum rhoncus quam ac ultrices. Sed ex nulla, viverra eleifend ipsum ut, ullamcorper faucibus nisl. Aliquam posuere nisi purus, non tempus ligula eleifend id. Proin sit amet tincidunt mauris, sed lobortis justo. Maecenas id leo eu erat fermentum egestas a sit amet justo. Aenean gravida maximus nunc. Sed luctus aliquam posuere. Mauris sem magna, congue ac tincidunt ut, suscipit in odio.

							Fusce facilisis magna a erat auctor sagittis. Aliq
						</p>
					</Columns.Column>
				</Columns>
		</div>
}

export default App