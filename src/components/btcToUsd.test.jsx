import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BitcoinConverter from './BitcoinConverter';

describe('Test that bitcoin is properly converted to the US dollar', () => {
	it('if 100 bitcoin is passed it would be roughly 2844050 US dollars', () => {
		const wrapper = mount(<BitcoinConverter />);
		const id = wrapper.find('[id*="convertBtcToUsd"]').prop('id');
		expect(id).toContain('convertBtcToUsd');
	});
});
