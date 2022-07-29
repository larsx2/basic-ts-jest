import { sum } from '../sum';
import { User, getModuleName } from '../user';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('mock sum', () => {
    const sum = jest.fn((a, b: number) => 4);
    sum(1, 1);

    expect(sum.mock.calls.length).toBe(1);
    expect(sum.mock.calls[0][0]).toBe(1);
    expect(sum.mock.results[0].value).toBe(4);
    sum.mockClear();
    sum.mockReturnValue(2);
    sum(1, 1);
    expect(sum.mock.results[0].value).toBe(2);
});


const getNameMock = jest.spyOn(User.prototype, 'getName')
    .mockImplementation(() => {
        return 'Eddie Vedder';
    });
test('mock user', () => {
    const user = new User("Eduardo");
    expect(user.getName()).toBe("Eddie Vedder");
    expect(getNameMock).toHaveBeenCalledTimes(1);

});

test('mock class', () => {
    expect(getModuleName()).toBe("Foo");
    expect(getModuleName()).toBe("Bar");
    expect(getModuleName()).toBe(undefined);
    expect(getModuleName).toBeCalledTimes(3);
});

jest.mock('../user', () => {
    return {
        ...jest.requireActual('../user'),
        getModuleName: jest.fn()
            .mockImplementationOnce(() => "Foo")
            .mockImplementationOnce(() => "Bar")
    }
});

