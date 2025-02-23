import { InputGroup } from '@/components/ui/input-group';
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from '@/components/ui/select';
import { createListCollection, Input, Spinner } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { useAsync } from 'react-use';

type Props = {
  // Define props
  label?: string;
};

export const SelectMultiple = (props: Props) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const { label } = props;

  const { loading, error, value } = useAsync(async () => {
    if (searchInput.length < 3) return;
    console.log('Fetching data...', searchInput);
    const result = await fetch(
      `http://localhost:3000/locations/search?query=${searchInput}`,
      {
        method: 'GET',
      }
    );
    const data = await result.json();
    console.log('Data obtained count:', data.length);
    return data;
  }, [searchInput]);

  const options = useMemo(() => {
    if (!value) return createListCollection({ items: [] });
    return createListCollection({
      items: value.map((item) => {
        return {
          label: `${item.opstina_ime_lat}(${item.naselje_ime_lat}) : ${item.ulica_ime_lat}`,
          value: item.primary_key,
          key: item.primary_key,
        };
      }),
    });
  }, [value]);

  console.log('options', options);

  console.log(loading, error, value);
  if (error) return <div>Error...</div>;
  if (!options) return <div>No data...</div>;
  return (
    <SelectRoot
      collection={options}
      size="sm"
      //   sx={{ width: '320px' }}
      //   width="320px"
      multiple
      //   sizse="sm"
      width="320px"
    >
      {label && <SelectLabel>{label}</SelectLabel>}
      <InputGroup
        flex="1"
        startElement={<LuSearch />}
        endElement={loading && <Spinner size="sm" />}
      >
        <Input
          placeholder="Type in location..."
          onInput={(e) => setSearchInput(e.currentTarget.value)}
          value={searchInput}
        />
      </InputGroup>
      <SelectTrigger>
        <SelectValueText placeholder="...search" />
      </SelectTrigger>
      <SelectContent _active={{ bg: 'red.500' }}>
        {options.items.map((item) => (
          <SelectItem item={item} key={item.key}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};
