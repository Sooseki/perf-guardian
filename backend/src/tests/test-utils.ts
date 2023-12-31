const mDatasetCreate = jest.fn();
jest.mock("../models/Dataset", () => ({
    create: mDatasetCreate,
}));

const mDomainCreate = jest.fn();
const mDomainFindOne = jest.fn();
const mDomainFindById = jest.fn();
const mDomainFind = jest.fn();
const mDomainUpdateOne = jest.fn();
jest.mock("../models/Domain", () => ({
    create: mDomainCreate,
    findOne: mDomainFindOne,
    findById: mDomainFindById,
    updateOne: mDomainUpdateOne,
    find: mDomainFind,
}));

const mClientFindOne = jest.fn();
const mClientUpdateOne = jest.fn();
const mClientFindByIdAndUpdate = jest.fn();
const mClientFindById = jest.fn();
const mClientCreate = jest.fn();
jest.mock("../models/Client", () => ({
    findOne: mClientFindOne,
    updateOne: mClientUpdateOne,
    findByIdAndUpdate: mClientFindByIdAndUpdate,
    findById: mClientFindById,
    create: mClientCreate,
}));

const mUserCreate = jest.fn();
const mUserFindOne = jest.fn();
const mUserFindById = jest.fn();
const mUserUpdateOne = jest.fn();
jest.mock("../models/User", () => ({
    create: mUserCreate,
    findOne: mUserFindOne,
    findById: mUserFindById,
    updateOne: mUserUpdateOne,
}));

const mGetUserTokenIds = jest.fn();
jest.mock("../utils/user", () => ({
    getUserTokenIds: mGetUserTokenIds,
}));

export {
    mDatasetCreate,
    mDomainCreate,
    mDomainFindOne,
    mDomainFindById,
    mDomainUpdateOne,
    mDomainFind,
    mClientFindOne,
    mClientUpdateOne,
    mClientFindByIdAndUpdate,
    mClientFindById,
    mUserCreate,
    mClientCreate,
    mUserFindOne,
    mUserFindById,
    mUserUpdateOne,
    mGetUserTokenIds,
};
